(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  const materialTemplate = document.querySelector("#materials-template");
  const materialList = document.querySelector("#material-list");
  const hotspotTemplate = document.querySelector(".hotspot-template");
  const hotspotAnnotation = document.querySelector(".HotspotAnnotation")

  const spinner = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 2200 2200" style="enable-background:new 0 0 2200 2200;" xml:space="preserve">
<style type="text/css">
 .st0{fill:url(#SVGID_1_);}
 .st1{fill:url(#SVGID_00000112606808333997610180000005486584032245290131_);}
 .st2{fill:url(#SVGID_00000069362763353654160810000010213621224448843164_);}
 .st3{fill:url(#SVGID_00000116211084755224315180000000251639241897614771_);}
 .st4{fill:url(#SVGID_00000044857058321566852320000001078736885270747319_);}
 .st5{fill:url(#SVGID_00000028293170995479830540000016565574915445510810_);}
 .st6{fill:url(#SVGID_00000157996284813974528240000006698334254000970930_);}
 .st7{fill:url(#SVGID_00000066501833676697500750000014247794286754272132_);}
 .st8{fill:url(#SVGID_00000174602975696218955650000006282122917728362649_);}
 .st9{fill:url(#SVGID_00000012448290472576807390000014684606768828974994_);}
 .st10{fill:url(#SVGID_00000089573297977949715040000003402018887638392728_);}
 .st11{fill:url(#SVGID_00000155104211727257510950000003139171861109597844_);}
</style>
<g id="Objects">
 <g>
   
     <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-1879.9952" y1="1879.95" x2="1174.6022" y2="1879.95" gradientTransform="matrix(1 0 0 -1 0 2200)">
     <stop  offset="0" style="stop-color:#CCF8FF"/>
     <stop  offset="0.3978" style="stop-color:#47BFFF"/>
     <stop  offset="0.7859" style="stop-color:#0008FF"/>
     <stop  offset="1" style="stop-color:#0005A6"/>
   </linearGradient>
   <path class="st0" d="M1100,539.1c-54.5,0-98.8-44.3-98.8-98.8V199.8c0-54.5,44.3-98.8,98.8-98.8s98.8,44.3,98.8,98.8v240.4
     C1198.8,494.7,1154.5,539.1,1100,539.1z"/>
   
     <linearGradient id="SVGID_00000059269468935809626620000012746030540549917370_" gradientUnits="userSpaceOnUse" x1="-3660.1135" y1="1775.45" x2="1251.6746" y2="1775.45" gradientTransform="matrix(1 0 0 -1 0 2200)">
     <stop  offset="0" style="stop-color:#CCF8FF"/>
     <stop  offset="0.3978" style="stop-color:#47BFFF"/>
     <stop  offset="0.7859" style="stop-color:#0008FF"/>
     <stop  offset="1" style="stop-color:#0005A6"/>
   </linearGradient>
   <path style="fill:url(#SVGID_00000059269468935809626620000012746030540549917370_);" d="M770.2,627.5c-35.2,0-68-18.9-85.6-49.4
     L564.3,369.8c-27.2-47.2-11-107.8,36.2-135c15-8.7,32.1-13.2,49.4-13.2c35.2,0,68,18.9,85.6,49.4l120.2,208.2
     c27.2,47.2,11,107.8-36.2,135C804.5,622.9,787.4,627.5,770.2,627.5z"/>
   
     <linearGradient id="SVGID_00000095303432590684102860000007783236565961093260_" gradientUnits="userSpaceOnUse" x1="-4617.9536" y1="1489.95" x2="1654.7783" y2="1489.95" gradientTransform="matrix(1 0 0 -1 0 2200)">
     <stop  offset="0" style="stop-color:#CCF8FF"/>
     <stop  offset="0.3978" style="stop-color:#47BFFF"/>
     <stop  offset="0.7859" style="stop-color:#0008FF"/>
     <stop  offset="1" style="stop-color:#0005A6"/>
   </linearGradient>
   <path style="fill:url(#SVGID_00000095303432590684102860000007783236565961093260_);" d="M528.6,869c-17.3,0-34.4-4.6-49.4-13.2
     L271,735.5c-22.9-13.2-39.2-34.5-46-60s-3.3-52.1,9.9-75c17.6-30.5,50.4-49.4,85.6-49.4c17.3,0,34.4,4.6,49.4,13.2L578,684.5
     c47.2,27.2,63.4,87.8,36.2,135C596.6,850,563.8,869,528.6,869z"/>
   
     <linearGradient id="SVGID_00000027605132181446058150000009295182553095918259_" gradientUnits="userSpaceOnUse" x1="-4541.0479" y1="1100" x2="2229.1279" y2="1100" gradientTransform="matrix(1 0 0 -1 0 2200)">
     <stop  offset="0" style="stop-color:#CCF8FF"/>
     <stop  offset="0.3978" style="stop-color:#47BFFF"/>
     <stop  offset="0.7859" style="stop-color:#0008FF"/>
     <stop  offset="1" style="stop-color:#0005A6"/>
   </linearGradient>
   <path style="fill:url(#SVGID_00000027605132181446058150000009295182553095918259_);" d="M199.8,1198.8
     c-54.5,0-98.8-44.3-98.8-98.8s44.3-98.8,98.8-98.8h240.4c54.5,0,98.8,44.3,98.8,98.8s-44.3,98.8-98.8,98.8H199.8z"/>
   
     <linearGradient id="SVGID_00000058551866224198785030000016047549180902947745_" gradientUnits="userSpaceOnUse" x1="-3540.8125" y1="709.9999" x2="2731.9268" y2="709.9999" gradientTransform="matrix(1 0 0 -1 0 2200)">
     <stop  offset="0" style="stop-color:#CCF8FF"/>
     <stop  offset="0.3978" style="stop-color:#47BFFF"/>
     <stop  offset="0.7859" style="stop-color:#0008FF"/>
     <stop  offset="1" style="stop-color:#0005A6"/>
   </linearGradient>
   <path style="fill:url(#SVGID_00000058551866224198785030000016047549180902947745_);" d="M320.5,1648.9c-35.2,0-68-18.9-85.6-49.4
     c-27.2-47.2-11-107.7,36.2-135l208.2-120.2c15-8.7,32.1-13.2,49.4-13.2c35.2,0,68,18.9,85.6,49.4c13.2,22.9,16.7,49.5,9.9,75
     s-23.2,46.8-46,60L370,1635.7C354.8,1644.3,337.8,1648.9,320.5,1648.9z"/>
   
     <linearGradient id="SVGID_00000031928918691759910790000006240212496388530593_" gradientUnits="userSpaceOnUse" x1="-1973.3148" y1="424.5" x2="2938.467" y2="424.5" gradientTransform="matrix(1 0 0 -1 0 2200)">
     <stop  offset="0" style="stop-color:#CCF8FF"/>
     <stop  offset="0.3978" style="stop-color:#47BFFF"/>
     <stop  offset="0.7859" style="stop-color:#0008FF"/>
     <stop  offset="1" style="stop-color:#0005A6"/>
   </linearGradient>
   <path style="fill:url(#SVGID_00000031928918691759910790000006240212496388530593_);" d="M649.9,1978.4
     c-17.3,0-34.4-4.6-49.4-13.2c-47.2-27.2-63.4-87.8-36.2-135L684.5,1622c17.6-30.5,50.4-49.4,85.6-49.4c17.3,0,34.4,4.6,49.4,13.2
     c47.2,27.2,63.4,87.8,36.2,135L735.5,1929C717.9,1959.5,685.1,1978.4,649.9,1978.4z"/>
   
     <linearGradient id="SVGID_00000083049932229884994360000014520845513127447986_" gradientUnits="userSpaceOnUse" x1="-306.4911" y1="320.0001" x2="2748.106" y2="320.0001" gradientTransform="matrix(1 0 0 -1 0 2200)">
     <stop  offset="0" style="stop-color:#CCF8FF"/>
     <stop  offset="0.3978" style="stop-color:#47BFFF"/>
     <stop  offset="0.7859" style="stop-color:#0008FF"/>
     <stop  offset="1" style="stop-color:#0005A6"/>
   </linearGradient>
   <path style="fill:url(#SVGID_00000083049932229884994360000014520845513127447986_);" d="M1100,2099c-54.5,0-98.8-44.3-98.8-98.8
     v-240.4c0-54.5,44.3-98.8,98.8-98.8s98.8,44.3,98.8,98.8v240.4C1198.8,2054.7,1154.5,2099,1100,2099z"/>
   
     <linearGradient id="SVGID_00000164510142756576965290000011907259269726658201_" gradientUnits="userSpaceOnUse" x1="-349.9509" y1="424.4999" x2="4561.8315" y2="424.4999" gradientTransform="matrix(1 0 0 -1 0 2200)">
     <stop  offset="0" style="stop-color:#CCF8FF"/>
     <stop  offset="0.3978" style="stop-color:#47BFFF"/>
     <stop  offset="0.7859" style="stop-color:#0008FF"/>
     <stop  offset="1" style="stop-color:#0005A6"/>
   </linearGradient>
   <path style="fill:url(#SVGID_00000164510142756576965290000011907259269726658201_);" d="M1550.1,1978.4
     c-35.2,0-68-18.9-85.6-49.4l-120.2-208.2c-27.2-47.2-11-107.8,36.2-135c15-8.7,32.1-13.2,49.4-13.2c35.2,0,68,18.9,85.6,49.4
     l120.2,208.2c27.2,47.2,11,107.7-36.2,135C1584.5,1973.8,1567.4,1978.4,1550.1,1978.4z"/>
   
     <linearGradient id="SVGID_00000032626477148032673920000004752372299920106126_" gradientUnits="userSpaceOnUse" x1="-35.7603" y1="710" x2="6236.979" y2="710" gradientTransform="matrix(1 0 0 -1 0 2200)">
     <stop  offset="0" style="stop-color:#CCF8FF"/>
     <stop  offset="0.3978" style="stop-color:#47BFFF"/>
     <stop  offset="0.7859" style="stop-color:#0008FF"/>
     <stop  offset="1" style="stop-color:#0005A6"/>
   </linearGradient>
   <path style="fill:url(#SVGID_00000032626477148032673920000004752372299920106126_);" d="M1879.5,1648.9
     c-17.3,0-34.4-4.6-49.4-13.2L1622,1515.5c-22.9-13.2-39.2-34.5-46-60s-3.3-52.1,9.9-75c17.6-30.5,50.4-49.4,85.6-49.4
     c17.3,0,34.4,4.6,49.4,13.2l208.2,120.2c47.2,27.2,63.4,87.8,36.2,135C1947.6,1630,1914.8,1648.9,1879.5,1648.9z"/>
   
     <linearGradient id="SVGID_00000064354777484978745730000004183513774586197938_" gradientUnits="userSpaceOnUse" x1="506.3854" y1="1100" x2="7276.561" y2="1100" gradientTransform="matrix(1 0 0 -1 0 2200)">
     <stop  offset="0" style="stop-color:#CCF8FF"/>
     <stop  offset="0.3978" style="stop-color:#47BFFF"/>
     <stop  offset="0.7859" style="stop-color:#0008FF"/>
     <stop  offset="1" style="stop-color:#0005A6"/>
   </linearGradient>
   <path style="fill:url(#SVGID_00000064354777484978745730000004183513774586197938_);" d="M1759.8,1198.8
     c-54.5,0-98.8-44.3-98.8-98.8s44.3-98.8,98.8-98.8h240.4c54.5,0,98.8,44.3,98.8,98.8s-44.3,98.8-98.8,98.8H1759.8z"/>
   
     <linearGradient id="SVGID_00000026847416883259569050000012935876414256763543_" gradientUnits="userSpaceOnUse" x1="1041.387" y1="1489.9" x2="7314.125" y2="1489.9" gradientTransform="matrix(1 0 0 -1 0 2200)">
     <stop  offset="0" style="stop-color:#CCF8FF"/>
     <stop  offset="0.3978" style="stop-color:#47BFFF"/>
     <stop  offset="0.7859" style="stop-color:#0008FF"/>
     <stop  offset="1" style="stop-color:#0005A6"/>
   </linearGradient>
   <path style="fill:url(#SVGID_00000026847416883259569050000012935876414256763543_);" d="M1671.4,869c-35.2,0-68-18.9-85.6-49.4
     c-27.2-47.2-11-107.7,36.2-135l208.2-120.2c15-8.7,32.1-13.2,49.4-13.2c35.2,0,68,18.9,85.6,49.4c13.2,22.9,16.7,49.5,9.9,75
     c-6.8,25.5-23.2,46.8-46,60l-208.2,120.2C1705.8,864.4,1688.7,869,1671.4,869z"/>
   
     <linearGradient id="SVGID_00000129177938330583657510000000240152738689570724_" gradientUnits="userSpaceOnUse" x1="1336.8419" y1="1775.45" x2="6248.6304" y2="1775.45" gradientTransform="matrix(1 0 0 -1 0 2200)">
     <stop  offset="0" style="stop-color:#CCF8FF"/>
     <stop  offset="0.3978" style="stop-color:#47BFFF"/>
     <stop  offset="0.7859" style="stop-color:#0008FF"/>
     <stop  offset="1" style="stop-color:#0005A6"/>
   </linearGradient>
   <path style="fill:url(#SVGID_00000129177938330583657510000000240152738689570724_);" d="M1429.8,627.5
     c-17.3,0-34.4-4.6-49.4-13.2c-47.2-27.2-63.4-87.8-36.2-135L1464.5,271c17.6-30.5,50.4-49.4,85.6-49.4c17.3,0,34.4,4.6,49.4,13.2
     c47.2,27.2,63.4,87.8,36.2,135L1515.5,578C1497.9,608.5,1465.1,627.5,1429.8,627.5z"/>
 </g>
</g>
<animateTransform
attributeName="transform"
attributeType="XML"
type="rotate"
dur="1s"
from="0"
to="360"
repeatCount="indefinite" />
</path>
</svg>`




    //This information needs to be removed then pulled with an AJAX Call using the Fetch API
    //this is the api url https://swiftpixel.com/earbud/api/materials"
    const infoBoxes = [
      {
        title: 'Noise-cancelling microphones',
        text: 'Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.',
        image: 'images/ear-piece.jpg'
      },
      {
        title: 'Comfortable fit',
        text: 'Three pairs of ultra comfortable silicone tips are included. The tips create an acoustic seal that blocks outside audio and secures the earbuds in place.',
        image: 'images/ear-piece.jpg'
      },
      {
        title: '360 AUDIO',
        text: '360 Audio places sound all around you, while Dolby Head Tracking™ technology delivers an incredible three-dimensional listening experience.',
        image: 'images/ear-piece.jpg'
      },
      {
        title: 'Ultra Fast Charging',
        text: 'Charge your earbuds in 30 minutes or less with our hyper charging technology.',
        image: 'images/ear-piece.jpg'
      },
    ];
  


  //This information needs to be removed then pulled with an AJAX Call using the Fetch API
  //this is the api url https://swiftpixel.com/earbud/api/infoboxes"
 

//use spinner function
  //functions
    
  function modelLoaded() {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }
 
    //make AJAX call here
    //use this url https://swiftpixel.com/earbud/api/infoboxes
    //theForEach loop will go inside (/promise)
   loadInfoBoxes();
    function loadInfoBoxes() {
      
fetch("https://swiftpixel.com/earbud/api/infoboxes")
.then(response=> response.json())
.then(infoBoxes=>{
  infoBoxes.forEach(infoBox=>{

    const clone = hotspotTemplate.content.cloneNode(true);
    const hotspotTitle = clone.querySelector(".hotspot-title")
    hotspotTitle.textContent = infoBox.title;

    const hotspotText = clone.querySelector(".hotspot-text")
    hotspotText.textContent = infoBox.text;

    const hotspotImg = clone.querySelector("img")
    hotspotImg.src = infoBox.image;
    hotspotAnnotation.appendChild(clone);
    hotspotTitle.appendChild(clone);
    hotspotText.appendChild(clone);
    hotspotImg.appendChild(clone)
   })


})



      infoBoxes.forEach((infoBox, index) => {
        
        let selected = document.querySelector(`#hotspot-${index+1}`);
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = infoBox.title;
  
        const textElement = document.createElement('p');
        textElement.textContent = infoBox.text;

        const imageElement = document.createElement('img')
        imageElement.src = 'images/earbud-1.jpg'
  
        selected.appendChild(titleElement);
        selected.appendChild(textElement);
        selected.appendChild(imageElement);
        
      });

    }


  loadInfoBoxes();

  loadMaterialInfo();
  function loadMaterialInfo(){
    fetch("https://swiftpixel.com/earbud/api/materials")
    .then(response => response.json())
    .then(materialListData=> {
  
    materialListData.forEach(material=> {
      //clone the template
      const clone = materialTemplate.content.cloneNode(true);
      //populate the clone template
      const materialHeading = clone.querySelector(".material-heading");
      materialHeading.textContent = material.heading;
      const materialDescription = clone.querySelector(".materials-description");
      materialDescription.textContent = material.description;


      //appand the populated template to the list
      materialList.appendChild(clone);
    });

    })
}

 loadMaterialInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
  
}

)();

