function navbar (){
    return `
    <div id="navbar">
    <div id="box11">
        <a href="../homepage/index.html"><img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt=""></a>
    </div>
    <div id="box2">
        <div id="box3">
            <input type="text" id="input601" placeholder="Enter Pin Code">
            <input id="input602" type="text" placeholder="Search for Medicines / Healthcare Products">
            <button id="btn603"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div id="box4">
            <div id="box5">
                <div><a href="../Order Medicine/Ordermedicine.html">Order Medicines</a></div>
                <div> <a href="../Healthcare Products/Healthcareproducts.html">Healthcare Products</a> </div>
                <div> <a href="">Lab Test</a> </div>
                <div> <a href="">RTPCR</a> </div>
            </div>
            <div id="box6">
                <div><i class="fa-solid fa-percent"></i><p class="p603">Offers</p></div>
                <div><i class="fa-solid fa-user"></i> <p class="p603">User</p></div>
                <div><i class="fa-solid fa-cart-shopping"></i> <p class="p603">Cart</p></div>
            </div>
        </div>
    </div>
</div>
    `
}

export default navbar;