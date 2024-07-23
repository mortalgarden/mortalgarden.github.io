                              var dialog;
                              const body = document.querySelector("body");
function openCheck(dialog) {
  if (dialog.open) {
    body.classList.add('open-modal');
  } else {
    body.classList.remove('open-modal');
  }
};
// SMIRKES FOURTEEN
                        const buriedModal = document.getElementById("Buried");
function buriedShow() {  var dialog = buriedModal;
  buriedModal.showModal();
  openCheck(dialog);
}
function buriedClose() {  var dialog = buriedModal;

  buriedModal.classList.add('hide');

  buriedModal.addEventListener('webkitAnimationEnd', function() {
    buriedModal.classList.remove('hide');
    buriedModal.close();
    openCheck(dialog);
    buriedModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}
                        const corruptionModal = document.getElementById("Corruption");
function corruptionShow() {  var dialog = corruptionModal;
  corruptionModal.showModal();
  openCheck(dialog);
}
function corruptionClose() {  var dialog = corruptionModal;

  corruptionModal.classList.add('hide');

  corruptionModal.addEventListener('webkitAnimationEnd', function() {
    corruptionModal.classList.remove('hide');
    corruptionModal.close();
    openCheck(dialog);
    corruptionModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}
                        const darkModal = document.getElementById("Dark");
function darkShow() {  var dialog = darkModal;
  darkModal.showModal();
  openCheck(dialog);
}
function darkClose() {  var dialog = darkModal;

  darkModal.classList.add('hide');

  darkModal.addEventListener('webkitAnimationEnd', function() {
    darkModal.classList.remove('hide');
    darkModal.close();
    openCheck(dialog);
    darkModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}
                        const desolationModal = document.getElementById("Desolation");
function desolationShow() {  var dialog = desolationModal;
  desolationModal.showModal();
  openCheck(dialog);
}
function desolationClose() {  var dialog = desolationModal;

  desolationModal.classList.add('hide');

  desolationModal.addEventListener('webkitAnimationEnd', function() {
    desolationModal.classList.remove('hide');
    desolationModal.close();
    openCheck(dialog);
    desolationModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}
                        const endModal = document.getElementById("End");
function endShow() {  var dialog = endModal;
  endModal.showModal();
  openCheck(dialog);
}
function endClose() {  var dialog = endModal;

  endModal.classList.add('hide');

  endModal.addEventListener('webkitAnimationEnd', function() {
    endModal.classList.remove('hide');
    endModal.close();
    openCheck(dialog);
    endModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}
                        const eyeModal = document.getElementById("Eye");
function eyeShow() {  var dialog = eyeModal;
  eyeModal.showModal();
  openCheck(dialog);
}
function eyeClose() {  var dialog = eyeModal;

  eyeModal.classList.add('hide');

  eyeModal.addEventListener('webkitAnimationEnd', function() {
    eyeModal.classList.remove('hide');
    eyeModal.close();
    openCheck(dialog);
    eyeModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}
                        const fleshModal = document.getElementById("Flesh");
function fleshShow() {  var dialog = fleshModal;
  fleshModal.showModal();
  openCheck(dialog);
}
function fleshClose() {  var dialog = fleshModal;

  fleshModal.classList.add('hide');

  fleshModal.addEventListener('webkitAnimationEnd', function() {
    fleshModal.classList.remove('hide');
    fleshModal.close();
    openCheck(dialog);
    fleshModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}
                        const huntModal = document.getElementById("Hunt");
function huntShow() {  var dialog = huntModal;
  huntModal.showModal();
  openCheck(dialog);
}
function huntClose() {  var dialog = huntModal;

  huntModal.classList.add('hide');

  huntModal.addEventListener('webkitAnimationEnd', function() {
    huntModal.classList.remove('hide');
    huntModal.close();
    openCheck(dialog);
    huntModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}
                        const lonelyModal = document.getElementById("Lonely");
function lonelyShow() {  var dialog = lonelyModal;
  lonelyModal.showModal();
  openCheck(dialog);
}
function lonelyClose() {  var dialog = lonelyModal;

  lonelyModal.classList.add('hide');

  lonelyModal.addEventListener('webkitAnimationEnd', function() {
    lonelyModal.classList.remove('hide');
    lonelyModal.close();
    openCheck(dialog);
    lonelyModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}
                        const slaughterModal = document.getElementById("Slaughter");
function slaughterShow() {  var dialog = slaughterModal;
  slaughterModal.showModal();
  openCheck(dialog);
}
function slaughterClose() {  var dialog = slaughterModal;

  slaughterModal.classList.add('hide');

  slaughterModal.addEventListener('webkitAnimationEnd', function() {
    slaughterModal.classList.remove('hide');
    slaughterModal.close();
    openCheck(dialog);
    slaughterModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}
                        const spiralModal = document.getElementById("Spiral");
function spiralShow() {  var dialog = spiralModal;
  spiralModal.showModal();
  openCheck(dialog);
}
function spiralClose() {  var dialog = spiralModal;

  spiralModal.classList.add('hide');

  spiralModal.addEventListener('webkitAnimationEnd', function() {
    spiralModal.classList.remove('hide');
    spiralModal.close();
    openCheck(dialog);
    spiralModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}
                        const strangerModal = document.getElementById("Stranger");
function strangerShow() {  var dialog = strangerModal;
  strangerModal.showModal();
  openCheck(dialog);
}
function strangerClose() {  var dialog = strangerModal;

  strangerModal.classList.add('hide');

  strangerModal.addEventListener('webkitAnimationEnd', function() {
    strangerModal.classList.remove('hide');
    strangerModal.close();
    openCheck(dialog);
    strangerModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}
                        const vastModal = document.getElementById("Vast");
function vastShow() {  var dialog = vastModal;
  vastModal.showModal();
  openCheck(dialog);
}
function vastClose() {  var dialog = vastModal;

  vastModal.classList.add('hide');

  vastModal.addEventListener('webkitAnimationEnd', function() {
    vastModal.classList.remove('hide');
    vastModal.close();
    openCheck(dialog);
    vastModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}
                        const webModal = document.getElementById("Web");
function webShow() {  var dialog = webModal;
  webModal.showModal();
  openCheck(dialog);
}
function webClose() {  var dialog = webModal;

  webModal.classList.add('hide');

  webModal.addEventListener('webkitAnimationEnd', function() {
    webModal.classList.remove('hide');
    webModal.close();
    openCheck(dialog);
    webModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}
// DEKKERS ADDENDUM
                        const extinctionModal = document.getElementById("Extinction");
function extinctionShow() {  var dialog = extinctionModal;
  extinctionModal.showModal();
  openCheck(dialog);
}
function extinctionClose() {  var dialog = extinctionModal;

  extinctionModal.classList.add('hide');

  extinctionModal.addEventListener('webkitAnimationEnd', function() {
    extinctionModal.classList.remove('hide');
    extinctionModal.close();
    openCheck(dialog);
    extinctionModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
  }, false);
}