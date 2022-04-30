function configureListeners() {
    let images = document.getElementsByTagName('img'); // select img elements  

    // iterate over images and add mouseover event listeners  
    for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity)        
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity)        
    } 
}

function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }    
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
    if (this.classList.contains('dim')){
        this.classList.remove('dim');
    }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price
            colorName = 'Lime Green';
            price = '$14.99';
            updatePrice(colorName, price);
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price
            colorName = 'Medium Brown';
            price = '$11.14';
            updatePrice(colorName, price);   
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price
            colorName = 'Royal Blue';
            price = '$22.99';
            updatePrice(colorName, price);
            break; 
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price
            colorName = 'Solid Red';
            price = '$13.42';
            updatePrice(colorName, price);
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price
            colorName = 'Solid White';
            price = '$21.98';
            updatePrice(colorName, price);
            break;    
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price
            colorName = 'Solid Black';
            price = '$4.99';
            updatePrice(colorName, price);
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price
            colorName = 'Solid Cyan';
            price = '$8.22';
            updatePrice(colorName, price);  
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price
            colorName = 'Solid Purple';
            price = '$11.99';
            updatePrice(colorName, price);
            break;
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price
            colorName = 'Solid Yellow';
            price = '$14.99';
            updatePrice(colorName, price);
            break;   
          default:              
    }
}

function updatePrice(colorName, price){       
    let colorPrice = document.getElementById('color-price');   // select element with corresponding id
    // display price
    colorPrice.textContent = price;

    
    let color = document.getElementById('color-name');    // select element with corresponding id
    //display color name
    color.textContent = colorName;
}





























