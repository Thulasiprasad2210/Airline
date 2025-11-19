let air = document.querySelector(".continer")
let main = document.createElement("div")
main.innerHTML = `
<div class="head">
    <nav class="icon">
        <img src="https://cdn.pixabay.com/photo/2017/08/14/14/24/air-2640661_1280.png" title="Travel Your Destination">
    </nav>
<ul type="none" class="menu">
<li><a href="#home">HOME</a></li>
<li><a href="#SERVICES">SERVICES</a></li>
<li><a href="#visit">VISIT</a></li>
<li><a href="#offers">NEWS</a></li>
<li><a href="#help">CONTACT</a></li>
</ul>
</div>
`
air.append(main)

let a = document.createElement("div")
a.id = "home"
a.innerHTML = `
<marquee behavior="scroll" direction="left">🛫The sky is calling, and I must go.To fly is to touch the face of the sky with freedom.🛫</marquee>
<div class="card">
<h2>WELCOME TO AIR TRAVEL</h2>
<p id="p">Save time and fly comfort</p>
<h1>The Sky is Waiting for You Life Is Short <br> And The World Is Wide!</h1>
<p id="p1">To get the best of your adventure you just need to leave and <br> go where you like we are waiting for you.</p>
<br>
<button id="b"><a href="#let's">Let's Fly</a></button>
</div>
`
air.append(a)

let b = document.createElement("div")
b.id = "SERVICES"
b.innerHTML = `
<div class="exp">
<center>
<br>
<h3>BEST SERVICES</h3>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHkJoA4giP5MxwjjDDLfjIPFoqxsF8RI5bZr7DMIsqAJw8_z-jXgoiY53IzP6opkfLWHI&usqp=CAU" title="Feel comfortable">
<img src="https://www.airindia.com/content/dam/air-india/newsroom/press-releases/images/Uniform_Image3.jpg" title="Feel comfortable">
<img src="https://cabincrew.my/wp-content/uploads/2022/04/Safety-Training-Class-by-Cabin-Crew-Malaysia-8.jpg" title="Feel comfortable">
<p>Airtravel provide passengers with helpful services from check-in to arrival, ensuring a smooth travel experience. <br> Cabin crew assist with seating, safety, and personal needs throughout the flight. Passengers are offered meals, <br> refreshments, and entertainment options to stay comfortable. Special assistance is given to children, <br>  elderly travelers, and those with medical or mobility needs. After landing, airlines support <br>  with baggage claims and customer service for a hassle-free journey.</p>
</center>
</div>
`
air.append(b)

let c = document.createElement("div")
c.id = "visit"
c.innerHTML = `
<center><h3>Explore</h3></center> 
<div class="blogs">
<div class="blog">
<img src="https://www.oag.com/hubfs/China%20India%20blog-1.jpg" title="All over country">
<p>✈️ Flights connect cities all over the country, making travel faster and easier for everyone.</p>
</div>
<div class="blog1">
<img src="https://t4.ftcdn.net/jpg/14/22/49/35/360_F_1422493555_a8wctRs8QbW6eRFB5H6mDfduazCfNiRH.jpg" title="Private Luxury Jets">
<p>🛩️ Private luxury jets offer comfort, privacy, and exclusive travel experiences.</p>
</div>
<div class="blog2">
<img src="https://t4.ftcdn.net/jpg/16/50/60/63/360_F_1650606350_ZcI9wNFip4d27DaSsX1jm9NUDZJyX3Fi.jpg" title="You can Feel Safe">
<p>✈️ Flights and private jets follow strict safety checks before takeoff to ensure passenger security.</p>
</div>
</div>
`
air.append(c)

let d = document.createElement("div")
d.id = "offers"
d.innerHTML = `
<div class="news">
<center>
<h3>Deals</h3>
<img src="https://www.shutterstock.com/image-vector/flight-travel-trip-banner-online-600nw-1390484558.jpg">
<img src="https://i.pinimg.com/736x/84/8b/7b/848b7b03bfae458510e9014587fe63ec.jpg">
<img src="https://images.emtcontent.com/offer-img/EMTFirst-new-update.png">
<p>Airtravel companies often provide special flight deals that make air travel more affordable and convenient. <br> These offers include discounted fares, seasonal promotions, last-minute deals, and holiday packages, <br> allowing passengers to save money while enjoying comfortable journeys. Many deals also come <br> with added benefits like free baggage, flexible booking options, or complimentary <br> upgrades, making flying both cost-effective and enjoyable.</p>
</center>
</div>
`
air.append(d)

let fly=document.createElement("div")
fly.id="let's"
fly.className="fly"
fly.innerHTML=`
<h3>Let's Fly</h3>
<div class="fly1">
<form action="">
<label for=""> To </label> <br>
<input type="text" placeholder="Your Destination place"><br>
<label for=""> Date </label> <br>
<input type="date"> <br>
<label for=""> Passenger class </label> <br>
<select class="cls"><br>
    <option>Select Your Class</option>
    <option>Economy</option>
    <option>Business</option>
    <option>First</option>
</select><br>
<button>Fly Now</button>
</form>
</div>
`
air.append(fly)

let contact = document.createElement("div")
contact.id = "help"
contact.innerHTML = `
 <h1>Contact-Us:</h1>
    <div>
    <p><b>Web :</b>Airtrave/in.com</p>
    <p><b>Email :</b>airtravel2025@gmail.com</p>
    <p><b>Phone :</b>+91 9090900333</p>
    </div>
`
air.append(contact)

let footer = document.createElement("footer")
footer.innerHTML = `
<center>
<p>&copy; Reserved by Air Travel 2025</p>
</center>
`
air.append(footer)