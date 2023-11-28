const images = [
    "C:/Users/HITHA/OneDrive/Documents/webpage/image/Home-image1.jpg",
    "C:/Users/HITHA/OneDrive/Documents/webpage/image/Home-image2.jpg",
    "C:/Users/HITHA/OneDrive/Documents/webpage/image/Home-image3.jpg"
    
];

let currentIndex = 0;
const homeSection = document.querySelector('.Home');
const bgImage = document.querySelector('.bg-image');

function changeBackground() {
    bgImage.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Change background every 5000 milliseconds (5 seconds)
setInterval(changeBackground, 5000);


// Initialize datepickers
$('#departureDate').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    todayHighlight: true,
    startDate: '+1d', // Set minimum date to tomorrow
    orientation: 'bottom'
});

$('#returnDate').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    todayHighlight: true,
    startDate: '+2d', // Set minimum date to the day after tomorrow
    orientation: 'bottom'
});


