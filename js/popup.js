document.addEventListener("DOMContentLoaded", function () {
  let mediaRecorder;
  let stream;

  const startRecordingButton = document.getElementById("startRecording");
  const stopRecordingButton = document.getElementById("stopRecording");

  startRecordingButton.addEventListener("click", async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "request_recording" },
        (response) => {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "Error line 17");
          }
        }
      );
    });
  });
});

// for appearance

function toggleButtons(activeButton) {
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");

  if (activeButton === "button1") {
    button1.disabled = true;
    button2.disabled = false;
  } else {
    button1.disabled = false;
    button2.disabled = true;
  }
}

function toggleState() {
  const toggleButton = document.getElementById("toggleButton");
  if (toggleButton.checked) {
    console.log("Toggle button is ON");
  } else {
    console.log("Toggle button is OFF");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.getElementById("closeButton");

  closeButton.addEventListener("click", function () {
    window.close();
  });
});