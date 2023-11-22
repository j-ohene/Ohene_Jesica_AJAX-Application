(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  const materialTemplate = document.querySelector("#materials-template");
  const materialList = document.querySelector("#material-list");
  const hotspotTemplate = document.querySelector(".hotspot-template");
  const hotspotAnnotation = document.querySelector(".HotspotAnnotation")



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
  function loadMaterialInfo(){
    fetch("https://swiftpixel.com/earbud/api/materials")
    .then(response => response.json())
    .then(materialListData=> {
    //make ajax call here:
    //use this url https://swiftpixel.com/earbud/api/infoboxes
      //theForEach loop will go inside (/promise)
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
    })
    });
  

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

