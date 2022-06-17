function navbar (){
    return `
    <div id="navbar">
    <div id="box1">
        <a href=""><img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt=""></a>
    </div>
    <div id="box2">
        <div id="box3">
            <input type="text" id="input601" placeholder="Enter Pin Code">
            <input id="input602" type="text" placeholder="Search for Medicines / Helthcare Products">
            <button id="btn603"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <div id="box4">
            <div id="box5">
                <div><a href="../Order Medicine/Ordermedicine.html">Order Medicines</a></div>
                <div> <a href="./Healthcareproducts.html">Healthcare Products</a> </div>
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


// ******* CSS for Navbar ********

// *{
//     margin: 0px;
//     padding: 0px;
//     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
// }
// a{
//     text-decoration: none;
//     color: #ffffff;

// }
// #header{
//     position: sticky;
//     top: 0px;
//     height:123px;
//     background-color: #10847E;
//     display:flex;
//     align-items: center;
// }
// #navbar{
//     width:90%;
//     margin: auto;
//     height:94px;
//     /* border: 1px solid red; */
//     display: flex;

// }
// #box1{
//     width:15%;

// }
// #box2{
//     width:80%;
// }
// #box1>a>img{
//     display: block;
//     width: 75%;
// }
// #box2>div{
//     /* border:1px solid red; */
//     height:50%;
// }
// #box3{
//     display: flex;
//     /* justify-cont; */
//     width:82%;
//     /* margin */
//     /* border:1px solid red; */
//     /* padding:10px; */
//     /* margin-top: 20px; */
// }
// #input601{
//     /* margin-left: -10px; */
//     width:30%;
//     border-top-left-radius: 6px;
//     border-bottom-left-radius: 6px;
//     display: block;
//     border: none;
//     padding: 10px;
//     font-size: 16px;
// }
// #input602{
//     width: 70%;
//     padding:10px;
//     border: none;
//     border-left: 1px solid grey;
//     display: block;
//     padding: 10px;
//     font-size: 16px;
    
// }

// #btn603{
// width:10%;
// border-bottom-right-radius: 6px;
// border-top-right-radius: 6px;
// border: none;
// font-size: 20px;
// padding: 10px;
// color: grey;
// }
// #box4{
//     display: flex;
    
// }
// #box4>div{
//     /* border:1px solid blue; */
//     width:50%;

// }
// #box5{
//     display: flex;
//     justify-content:left;
//     align-items: center;
//     gap:20px;
// }
// #box5>div{
//     /* border:1px solid yellow; */
//     font-size: 18px;
//     margin-top: 20px;
//     /* font-weight: bold; */

// }
// #box6{
//     display: flex;
//     justify-content:right;
//     align-items: center;
//     gap:30px;
// }
// #box6>div{
//     /* border:1px solid yellow; */
//     font-size: 18px;
//     margin-top: 20px;
//     /* font-weight: bold; */
//     display: flex;
//     gap:10px;
//     font-weight: bold;
//     color: white;

// }