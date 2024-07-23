// navigation buttons
    const smallSiteNav = document.getElementById("nav-small-s");
    const smallSiteButton = document.getElementById("btn-small-s");
    const smallPageNav = document.getElementById("nav-small-p");
    const smallPageButton = document.getElementById("btn-small-p");
    const iSmallS = document.getElementById("i-small-s");
    const iSmallP = document.getElementById("i-small-p");
    var iF;
    
  function navSmallS() {
    smallSiteNav.classList.toggle("active");
    smallSiteButton.classList.toggle("click");
    smallPageNav.classList.remove("active");
    smallPageButton.classList.remove("click");
      iF = iSmallS.classList.contains("ph-mask-sad");

      if (iF) {
        iSmallS.classList.replace("ph-mask-sad", "ph-mask-happy");
      } else {
        iSmallS.classList.replace("ph-mask-happy", "ph-mask-sad");
      }
      iF = iSmallP.classList.contains("ph-eye-closed");
      if (iF) {
        iSmallP.classList.replace("ph-eye-closed", "ph-eye");
      }
  } 
  function navSmallP() {
    smallPageNav.classList.toggle("active");
    smallPageButton.classList.toggle("click");
    smallSiteNav.classList.remove("active");
    smallSiteButton.classList.remove("click");
      iF = iSmallS.classList.contains("ph-mask-happy");

      if (iF) {
        iSmallS.classList.replace("ph-mask-happy", "ph-mask-sad");
      }

      iF = iSmallP.classList.contains("ph-eye");

      if (iF) {
        iSmallP.classList.replace("ph-eye", "ph-eye-closed");
      } else {
        iSmallP.classList.replace("ph-eye-closed", "ph-eye");
      }
  } 
    const bigSiteNav = document.getElementById("nav-big-s");
    const bigSiteButton = document.getElementById("btn-big-s");
    const bigPageNav = document.getElementById("nav-big-p");
    const iBig = document.getElementById("i-big-s");

  function navBigS() {
    bigSiteNav.classList.toggle("active");
    bigPageNav.classList.toggle("inactive");
    bigSiteButton.classList.toggle("click");
      iF = iBig.classList.contains("ph-mask-sad");

      if (iF) {
        iBig.classList.replace("ph-mask-sad", "ph-mask-happy");
      } else {
        iBig.classList.replace("ph-mask-happy", "ph-mask-sad");
      }
  }
