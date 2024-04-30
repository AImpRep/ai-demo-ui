// ------------------------------------------------------------------------- //
// AI HELPER GLOBALS
// ------------------------------------------------------------------------- //

// BE ENDPOINT (and actions)
const ENDPOINT = {
  BASE: "http://localhost:3001/",
  DESCRIBE: "describe",
  ASSIST: "assist",
  HELP: "help",
  SEND_MESS: "send"
};

// CSS URI
const css_uri = "./poc.css";

// minimum image size
const image_size = 60;
let loader_counter = 0;

// stored data
let descriptions = [];
let assists = [];
let attachaments = [];
let chats = [];
let current_chat_id = 0;
let mediaRecorder;
let chunks = [];
let rec = false;
//let chat = localStorage.getItem("chatInCorso") === null ? [] : localStorage.getItem("chatInCorso");
//localStorage.setItem("chatInCorso", chat) 

// ------------------------------------------------------------------------- //
// AI HELPER LOGIC
// ------------------------------------------------------------------------- //

/**
 * execute AJAX requests
 *
 * @param {string} url - BE base url
 * @param {JSON} data - JSON obj POST params
 * @param {function} success - success handler
 * @param {function} error - (optional) error handler
 * @param {boolean} no_loader - (optional) don't show loader
 */
function request(url, data, success, error, no_loader) {
  $.post({
    url,
    data,
    success,
    error,
    beforeSend: !no_loader && toggle_loader,
    complete: !no_loader && toggle_loader,
    dataType: "json",
  });
}

/**
 * generic error handler
 * @param {JSON} error - JSON obj error response from BE
 */
function handleError(error) {
  add_message_to_chat("Non è stato possibile procedere con l'operazione. Riprova!", "ia");
  disabledSectionInput(false);
  console.log(`handling error: ${error}`);
}

/**
 * DESCRIBE AI Helper
 *
 * @param {event} e - (optional) click event
 * @param {obj} element - DOM element
 */
function describe(e, index, type, uri) {
  stop_event_propagation(e);

  // retrieve description from stored data, if any
  if (descriptions && descriptions[index]) {
    return show_modal(descriptions[index]);
  }

  // otherwise, retrieve data from BE
  request(
    ENDPOINT["BASE"],
    {
      action: ENDPOINT["DESCRIBE"],
      params: {
        type,
        uri,
      },
    },
    (res) => {
      if (res.success) {
        descriptions[index] = res.response;
        show_modal(descriptions[index]);
      } else {
        handleError(res);
      }
    },
    handleError
  );
}

/**
 * SUMMARIZE AI Helper
 *
 * @param {event} e - (optional) click event
 */
function summarize(e) {
  toggle_helper();
  describe(e, 0, "page", window.location.href);
}

/**
 * ASSIST AI Helper
 *
 * @param {event} e - (optional) click event
 * @param {string} type - type of support to request
 */
function assist(e, type) {
  stop_event_propagation(e);

  // apply assist if not already
  if (!assists || !assists[type]) {
    request(
      ENDPOINT["BASE"],
      {
        action: ENDPOINT["ASSIST"],
        params: {
          type,
          uri: window.location.href,
        },
      },
      (res) => {
        if (res.success) {
          assists[type] = res.response;
          apply_css(assists[type]);
        } else {
          handleError(res);
        }
      },
      handleError
    );
  }
}

/**
 * avvia registrazione
*/
async function startRecording() {
  let stream = null;
  //$("#AIhelperChat-audiobtn").addClass("in-rec");
  
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    add_message_to_chat("Ti sto ascoltando...", 'ia')
    mediaRecorder.addEventListener('dataavailable', function(event) {
      chunks.push(event.data);
    });
    mediaRecorder.addEventListener('stop', function() {
      let recordedBlob = new Blob(chunks, {type: 'audio/mp3'});
      //createDownloadLink(recordedBlob)
      inviaRegistrazione(recordedBlob, true);
      chunks = [];
    });
    rec = true;
    mediaRecorder.start();
  } catch (err) {
    if(err.name === "NotAllowedError"){
      //alert("Abilita i permessi di accesso al microfono");
      add_message_to_chat("Non posso ascoltare ciò che mi chiedi. Permettimi di utilizzare il microfono e sarò lieta di aiutarti!", 'ia');
    }
  }
}

/**
 * interrompi registrazione
*/
function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    rec = false;
    //$("#AIhelperChat-audiobtn").removeClass("in-rec");
    add_message_to_chat("Elaboro la richiesta!", 'ia')
    mediaRecorder.stop();
  } else {
    console.error('MediaRecorder not initialized or already stopped.');
  }
}

/**
 * 
 * @param {*} richiesta - testo o audio  
 * @param {boolean} audio - true se stiamo inviando audio
 */
function inviaRegistrazione(richiesta, audio=false){
  //inviare audio/testo al BE, aggiungere alla chat la risposta
  if(audio){
    richiesta = URL.createObjectURL(richiesta);
  }
  
}

function createDownloadLink(blob) {
  const url = URL.createObjectURL(blob);
  const downloadLink = $('<a style="display: none;" download="recording.mp3">Download Recording</a>');
  downloadLink.attr('href', url);
  $('body').append(downloadLink);
  downloadLink[0].click(); // Simulate click to trigger download
  URL.revokeObjectURL(url); // Release the object URL
  downloadLink.remove(); // Remove the anchor element
}


/**
 * SEND_MESS AI Helper
 *
 * @param {event} e - (optional) click event
 * @param {string} type - text to send
 */
function sendMessage(e, content) {
  stop_event_propagation(e);

  // strip message
  content = content.replace(/(<([^>]+)>)/gi, "").trim();
  if (content) {
    // add stripped msg to chat and clean input box
    add_message_to_chat(content, "user");
    $("#AIhelperChat-input").val("");

    //messaggio in attesa della risposta
    add_message_to_chat("Sto elaborando una risposta...", "ia");
   
    // send to BE
    //disabilito la sezione di invio
    disabledSectionInput(true);

    request(
      ENDPOINT["BASE"] + ENDPOINT["SEND_MESS"],
      {
        action: ENDPOINT["SEND_MESS"],
        params: {
          message: content
        }
      },
      (res) => {
        if (res.response) {
          //chats[current_chat_id].thread_id = res.threadId;
          var redirect = `https://buonielibretti.poste.it/risparmiare-con-i-buoni.html?sab=${res.response}#valore`;
          
          add_message_to_chat("Tra qualche istante verrai reindirizzato sulla pagina con i risultati! ", "ia");

          setTimeout(() => {
            window.open(redirect, "_blank");
          }, 3000);
          
          disabledSectionInput(false);
          //add_message_to_chat(res.response);
        } else {
          handleError(res);
        }
      },
      handleError,
      true
    );
  }
}

/**
 * 
 * @param {boolean} disabled - disabilta(true) o abilita(false) la sezione di input
 */
function disabledSectionInput(disabled){
  $("#AIhelperChat-input").prop("disabled", disabled);
  $("#AIhelperChat-inputbtn").prop("disabled", disabled);
  $("#AIhelperChat-audiobtn").prop("disabled", disabled);
}

/**
 * HELP AI Helper
 *
 * @param {event} e - (optional) click event
 * @param {string} type - text to send
 */
function help(e, content) {
  stop_event_propagation(e);

  // strip message
  content = content.replace(/(<([^>]+)>)/gi, "").trim();
  if (content) {
    // add stripped msg to chat and clean input box
    add_message_to_chat(content, "user");
    $("#AIhelperChat-input").val("");

    // send to BE
    toggle_thinking_message();
    request(
      ENDPOINT["BASE"],
      {
        action: ENDPOINT["HELP"],
        params: {
          content,
          threadId:
            chats && chats[current_chat_id]
              ? chats[current_chat_id].thread_id
              : null,
          uris:
            attachaments && attachaments[current_chat_id]
              ? attachaments[current_chat_id]
              : null,
        },
      },
      (res) => {
        if (res.success) {
          chats[current_chat_id].thread_id = res.threadId;
          toggle_thinking_message();
          add_message_to_chat(res.response);
        } else {
          handleError(res);
        }
      },
      handleError,
      true
    );
  }
}

// ------------------------------------------------------------------------- //
// AI HELPER UI
// ------------------------------------------------------------------------- //

/**
 * ACTIVATE AI Helper on DOM ready
 */
$(document).ready(() => {
  // add custom CSS
  $("head").append(
    `<link rel="stylesheet" href="${css_uri}" type="text/css" />`
  );

  // retrieve page contents to describe
  get_all_page_videos(get_all_page_images(0));

  // retrieve page attachments to help
  get_all_page_attachments();

  // add AI Helper UI
  add_AI_helper_UI_elements();
});

/**
 * get all page images && bg-image (> image_size) and add describe anchor
 *
 * @param {int} descriptions_index - current index of descriptions array
 * @returns updated descriptions index
 */
function get_all_page_images(descriptions_index) {
  // BG image
  $("*").each(function () {
    const bg = $(this).css("background-image");
    const size = $(this).css("background-size");
    if (
      bg &&
      bg != "none" &&
      size &&
      (parseInt(size) > image_size || size === "cover")
    ) {
      $(this)
        .attr("describe", true)
        .attr("describe-type", "image")
        .attr("describe-uri", bg.slice(4, -1).replace(/"/g, ""))
        .attr("describe-index", `idx-${++descriptions_index}`);
    }
  });

  // standard images
  $("img").each(function () {
    if ($(this).width() > image_size && $(this).height() > image_size) {
      $(this)
        .attr("describe", true)
        .attr("describe-type", "image")
        .attr("describe-uri", $(this).attr("src"))
        .attr("describe-index", `idx-${++descriptions_index}`);
    }
  });

  // return updated index
  return descriptions_index;
}

/**
 * get all page videos and add describe anchor
 *
 * @param {int} descriptions_index - current index of descriptions array
 * @returns updated descriptions index
 */
function get_all_page_videos(descriptions_index) {
  // YT videos
  $("iframe")
    .filter(function () {
      return this.src.match(
        /\s*(\/\/www.youtube.com\/(?:v|embed)\/([a-zA-Z0-9-]+).*)/
      );
    })
    .each(function () {
      $(this)
        .attr("describe", true)
        .attr("describe-type", "video")
        .attr("describe-uri", $(this).attr("src"))
        .attr("describe-index", `idx-${++descriptions_index}`);
    });

  // return updated index
  return descriptions_index;
}

/**
 * get all page attachments and add help anchor
 */
function get_all_page_attachments() {
  let attachaments_index = -1;
  $(".list-file").each(function () {
    $(this).attr("help", true);
    $(this).attr("help-index", `idx-${++attachaments_index}`);

    // add attachments
    attachaments[`idx-${attachaments_index}`] = [];
    $(this)
      .find("a")
      .each(function () {
        attachaments[`idx-${attachaments_index}`].push($(this).attr("href"));
      });
  });
}

/**
 * add AI Helper UI elements
 */
function add_AI_helper_UI_elements() {
  // helper btn
  add_AI_helper_UI_btn();

  // chat screen
  add_AI_helper_UI_help_chat();

  // helper screen
  add_AI_helper_UI_screen();

  // helper buttons
  add_AI_helper_UI_buttons();

  // helper describe modal
  add_AI_helper_UI_describe_modal();
}

/**
 * add AI Helper UI button
 */
function add_AI_helper_UI_btn() {
  $("<span></span>", {
    class: "bold text-bright",
  })
    .text("AI helper")
    .appendTo(
      $("<a>", {
        href: "#",
        class: "btn btn-expand",
        click: toggle_chat,
      }).appendTo(
        $("<div>", {
          id: "AIhelperBtn",
        }).appendTo("body")
      )
    );
}

/**
 * add AI Helper UI screen
 */
function add_AI_helper_UI_screen() {
  // wrapper
  const wrapper = $("<div></div>", {
    id: "AIhelperScreen-wrapper",
  }).appendTo("body");

  // bg
  $("<div></div>", {
    id: "AIhelperScreen-bg",
    click: toggle_helper,
  }).appendTo(wrapper);

  // screen structure
  const screen = $("<div></div>", {
    id: "AIhelperScreen-area",
    class: "innerspacer-xs-20",
  }).appendTo(wrapper);

  // title
  $("<h3></h3>", {
    class: "spacer-xs-0",
  })
    .text("Ciao!")
    .appendTo(screen);

  // description
  $("<p></p>", {
    class: "spacer-xs-top-10",
  })
    .text(
      "Qui puoi trovare alcune funzioni di aiuto: seleziona quella desiderata."
    )
    .appendTo(screen);

  // actions area
  const actions = $("<ul></ul>", {
    id: "AIhelperScreen-actions",
    class: "list-unstyled list-inline spacer-xs-top-20",
  }).appendTo(screen);

  // action buttons
  add_AI_helper_UI_screen_action(actions, "Riassumi pagina", summarize);
  add_AI_helper_UI_screen_action(actions, "Aumenta zoom", assist, "impaired");
  add_AI_helper_UI_screen_action(
    actions,
    "Riduci colori",
    assist,
    "colorblind"
  );
  add_AI_helper_UI_screen_action(actions, "Semplifica UI", assist, "deficit");
}

/**
 * add AI Helper UI screen action
 *
 * @param {object} parent - DOM object
 * @param {string} action - action to complete
 * @param {string} text - action text
 */
function add_AI_helper_UI_screen_action(parent, text, action, parameter) {
  $("<span></span>", {
    class: "hide",
  })
    .text(text)
    .appendTo(
      $("<a></a>", {
        title: text,
        href: "#",
        class: "btn btn-primary btn-cta spacer-xs-0",
        click: function (e) {
          action(e, parameter);
        },
      }).appendTo(
        $("<li></li>", {
          class: parameter,
        }).appendTo(parent)
      )
    );
}

/**
 * add AI Helper UI buttons
 */
function add_AI_helper_UI_buttons() {
  $("*").each(function () {
    if ($(this).attr("describe")) {
      add_AI_helper_UI_describe_button($(this));
    } else if ($(this).attr("help")) {
      add_AI_helper_UI_help_button($(this));
    }
  });
}

/**
 * add AI Helper UI describe button
 *
 * @param {obj} element - DOM element
 */
function add_AI_helper_UI_describe_button(element) {
  element.parent().css("position", "relative");
  $("<img></img>", {
    src: "./risorse_dt/condivise/immagini/generiche/informazioni.png",
    srcset: "./risorse_dt/condivise/immagini/generiche/informazioni@2x.png 2x",
    alt: "maggiori info disponibili",
  }).appendTo(
    $("<a>", {
      href: "#",
      class: "innerspacer-xs-05",
      click: function (e) {
        describe(
          e,
          $(element).attr("describe-index"),
          $(element).attr("describe-type"),
          $(element).attr("describe-uri")
        );
      },
    }).appendTo(
      $("<div>", {
        class: "AIhelperDescribe",
      }).appendTo(element.parent())
    )
  );
}

/**
 * add AI Helper UI help button
 *
 * @param {obj} element  - DOM element
 */
function add_AI_helper_UI_help_button(element) {
  element.parent().css("position", "relative");
  $("<span></span>", {
    class: "bold",
  })
    .text("AIUTO!")
    .appendTo(
      $("<a>", {
        href: "#",
        class: "innerspacer-xs-05",
        click: function (e) {
          current_chat_id = $(element).attr("help-index");
          toggle_chat(e);
        },
      }).appendTo(
        $("<div>", {
          class: "AIhelperHelp",
        }).appendTo(element.parent())
      )
    );
}

/**
 * add AI Helper UI describe buttons
 */
function add_AI_helper_UI_describe_modal() {
  // modal structure
  const modal = $("<div></div>", {
    class: "col-md-10 col-md-push-1",
  }).appendTo(
    $("<div></div>", {
      class: "row",
    }).appendTo(
      $("<div></div>", {
        class: "modal-content",
      }).appendTo(
        $("<div></div>", {
          class: "modal-dialog modal-lg",
          role: "document",
        }).appendTo(
          $("<div></div>", {
            id: "AIhelperModal",
            class: "modal modal-basic fade",
            role: "dialog",
            style: "display: none",
          }).appendTo("body")
        )
      )
    )
  );

  // modal header with close icon
  $("<span></span>", {
    class: "close-icon",
  })
    .text("×")
    .appendTo(
      $("<button></button>", {
        type: "button",
        class: "close spacer-xs-top-10",
        "data-dismiss": "modal",
        "aria-label": "Close",
      }).appendTo(
        $("<div></div>", {
          class: "modal-header innerspacer-xs-bottom-0",
        }).appendTo(modal)
      )
    );

  // modal contents
  $("<p></p>", {
    id: "AIhelperModal-contents",
    class: "innerspacer-xs-20",
  }).appendTo(
    $("<div></div>", {
      class: "col-sm-12",
    }).appendTo(
      $("<div></div>", {
        class: "row",
      }).appendTo(
        $("<div></div>", {
          class: "modal-body innerspacer-xs-top-0",
        }).appendTo(modal)
      )
    )
  );
}

/**
 * add AI Helper UI help chat
 */
function add_AI_helper_UI_help_chat() {
  // wrapper
  const wrapper = $("<div></div>", {
    id: "AIhelperChat-wrapper",
  }).appendTo("body");

  // bg
  $("<div></div>", {
    id: "AIhelperChat-bg",
    click: toggle_chat,
  }).appendTo(wrapper);

  // area structure
  const screen = $("<div></div>", {
    id: "AIhelperChat-area",
    class: "innerspacer-xs-20",
  }).appendTo(wrapper);

  // title
  $("<h3></h3>", {
    class: "spacer-xs-0",
  })
    .text("Chat")
    .appendTo(screen);

  // chat box
  $("<div></div>", {
    id: "AIhelperChat-box",
  }).appendTo(screen);

  // first messages
  const first_message = {
    text: "Ti serve aiuto? Scrivici e proveremo ad aiutarti...",
    type: "",
  };
  $(".list-file").each(function () {
    $(this).attr("help", true);
    chats[$(this).attr("help-index")] = { chat: [], thread_id: null };
    chats[$(this).attr("help-index")].chat.push(first_message);
  });

  // input area
  const input = $("<div></div>", {
    class: "input-group",
  }).appendTo(screen);

  // input box
  $("<input></input>", {
    id: "AIhelperChat-input",
    type: "text",
    placeholder: "Invia un messaggio",
    class: "form-control input-search",
  })
    .on("keyup", function (e) {
      if (e.key === "Enter" || e.keyCode === 13) {
        //help(e, $(this).val());
        sendMessage(e, $("#AIhelperChat-input").val());
      }
    })
    .appendTo(input);

  // send button
  $("<button></button>", {
    class:
      "btn btn-primary btn-cta btn-cta-support-scrivici spacer-xs-bottom-0",
    type: "submit",
    id: "AIhelperChat-inputbtn",
    click: function (e) {
      sendMessage(e, $("#AIhelperChat-input").val());
    },
  })
    .text("Invia")
    .appendTo(
      $("<div></div>", {
        class: "input-group-btn",
      }).appendTo(input)
    );

  // audio button
  /*$("<button></button>", {
    class:
      "btn btn-primary btn-cta spacer-xs-bottom-0",
    type: "submit",
    id: "AIhelperChat-audiobtn",
    click: function (e) {
      if(!rec){
        startRecording();
      }else{
        stopRecording();
      }
    },
  })
    .text("Registra")
    .appendTo(
      $("<div></div>", {
        class: "input-group-btn",
      }).appendTo(input)
    ); */

  // loading area
  $("<img></img>", {
    src: "./risorse_dt/condivise/immagini/generiche/spinner_grigio.gif",
  }).prependTo(
    $("<div></div>", {
      id: "AIhelperChat-thinking",
    })
      .text("Stiamo elaborando una risposta...")
      .appendTo(screen)
  );
}

/**
 * add message to chat
 *
 * @param {string} text - text to show
 * @param {string} type - (optional) user message or others
 */
function add_message_to_chat(text, type) {
  if (chats /* && chats[current_chat_id]*/) {
    if(!chats[current_chat_id]){
      chats[current_chat_id] = { chat: [], thread_id: null };
    }
    chats[current_chat_id].chat.push({ text, type });
    //localStorage.setItem("chatInCorso", chats);
    refresh_chat();
  }
}

/**
 * refresh current chat
 */
function refresh_chat() {
  $("#AIhelperChat-box").html("");
  if (chats && chats[current_chat_id] && chats[current_chat_id].chat) {
    for (let i = 0; i < chats[current_chat_id].chat.length; i++) {
      const chat = chats[current_chat_id].chat[i];
      $("<div></div>", {
        class: chat.type,
      })
        .text(chat.text)
        .appendTo($("#AIhelperChat-box"));
      const d = $("#AIhelperChat-box");
      d.scrollTop(d.prop("scrollHeight"));
    }
  }
}

/**
 * toggle loader
 *
 * @param {event} e - (optional) event
 */
function toggle_loader() {
  $(".pageLoader").fadeToggle();
}

/**
 * toggle helper
 *
 * @param {event} e - (optional) event
 */
function toggle_helper(e) {
  stop_event_propagation(e);
  if ($("#AIhelperChat-wrapper").toggle().is(":visible")) {
    $(document.body).css("overflow", "hidden");
  } else {
    $(document.body).css("overflow", "auto");
  }
}

/**
 * toggle chat
 *
 * @param {event} e - (optional) event
 */
function toggle_chat(e) {
  stop_event_propagation(e);
  if(chats.length === 0){

    add_message_to_chat("Ciao, come posso aiutarti?", 'ia');
    //chats[current_chat_id] = { chat: [], thread_id: null };
    //chats[current_chat_id].chat.push({ text: "Ciao, come posso aiutarti?", type:'ia' });
    //refresh_chat();
  }
  if ($("#AIhelperChat-wrapper").toggle().is(":visible")) {
    refresh_chat();
    $(document.body).css("overflow", "hidden");
  } else {
    $(document.body).css("overflow", "auto");
  }
}

/**
 * toggle chat thinking message
 */
function toggle_thinking_message() {
  if ($("#AIhelperChat-thinking").toggle().is(":visible")) {
    $("#AIhelperChat-input").prop("disabled", true);
    $("#AIhelperChat-inputbtn").prop("disabled", true);
  } else {
    $("#AIhelperChat-input").prop("disabled", false);
    $("#AIhelperChat-inputbtn").prop("disabled", false);
  }
}

/**
 * show modal
 *
 * @param {string} text - text to show into modal
 */
function show_modal(text) {
  $("#AIhelperModal-contents").html(text);
  $("#AIhelperModal").modal("show");
  setTimeout(() => {
    $(window).resize();
  }, 200);
}

/**
 * apply CSS
 *
 * @param {string} css - rules from BE
 */
function apply_css(css) {
  $("head").append(`<style>${css}</style>`);
}

// ------------------------------------------------------------------------- //
// AI HELPER helper methods
// ------------------------------------------------------------------------- //

/**
 * stop event action and propagation
 */
function stop_event_propagation(e) {
  if (e && (e instanceof Event || e.originalEvent instanceof Event)) {
    e.preventDefault();
    e.stopPropagation();
  }
}