/* var head = document.getElementsByTagName("head")[0]; */
var head = document.head;
/* var body = document.getElementsByTagName("body")[0]; */
var body = document.body;
body.style.backgroundColor = "#3A3B3C"

/* Create header tag */
var header = document.createElement("header");
header.style.backgroundColor = "#28282B";
body.appendChild(header);

/* Create header container */
var div = document.createElement("div");
div.id = "hr-head-con01";
div.className = "container";
div.style.maxWidth = "1300px";
div.style.margin = "0 auto";
header.appendChild(div);

/* Create header section */
var hr_head_con01 = document.getElementById("hr-head-con01");
var div = document.createElement("div");
div.id = "header";
div.className = "header_";
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.zIndex = "1";
div.style.padding = "15px 0";
hr_head_con01.appendChild(div);

/* Create header: brand section */
var div_header = document.getElementById("header");
var div = document.createElement("div");
div.id = "brand";
div.className = "brand_";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "10px";
div_header.appendChild(div);

/* Create header::brand: icon and name */
var brand = document.getElementById("brand");
var img = document.createElement("img");
img.src = "assets/roulette.jpg";
img.alt = "roulette_wheel";
img.id = "roulette_wheel";
img.style.width = "50px";
img.style.height = "50px";
brand.appendChild(img);
var h1 = document.createElement("h1");
h1.innerText = "Roulette";
h1.style.color = "white";
brand.appendChild(h1);

/* Create header: user section */
var div = document.createElement("div");
div.id = "user";
div.className = "user_";
div.style.display = "flex";
div.style.gap = "50px";
div.style.alignItems = "center";
div_header.appendChild(div);

/* Create header::user: chips and account */
/* Create header::user: chips */
var user = document.getElementById("user");
var div = document.createElement("div");
div.id = "user-chips";
div.className = "user__chips";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "10px";
var img = document.createElement("img");
img.src = "assets/poker_chip.png";
img.alt = "poker_chip";
img.id = "poker_chip";
img.style.width = "50px";
img.style.height = "50px";
div.appendChild(img);
var h5 = document.createElement("h1");
h5.innerText = "1000000";
h5.style.color = "white";
div.appendChild(h5);
user.appendChild(div);

/* Create header::user: account */
var img = document.createElement("img");
img.src = "assets/person.png";
img.alt = "person";
img.id = "person";
img.style.width = "50px";
img.style.height = "50px";
user.appendChild(img);

/* Create main tag */
var main = document.createElement("main");
header.after(main);

/* Create footer tag */
var footer = document.createElement("footer");
main.after(footer);

/* Create rolls: container */
var div = document.createElement("div");
div.id = "mn-rolls-con01";
div.className = "container";
div.style.maxWidth = "1300px";
div.style.margin = "0 auto";
main.appendChild(div);

/* barrier */
var mn_rolls_con01 = document.querySelector("#mn-rolls-con01");
var div = document.createElement("div");
div.id = "barrier_01";
div.className = "barrier";
div.style.height = "50px";
mn_rolls_con01.appendChild(div);

/* Create last rolls: section */
var div = document.createElement("div");
div.id = "last_rolls";
div.className = "last__rolls";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.alignItems = "flex-start";
div.style.gap = "10px";
mn_rolls_con01.appendChild(div);

/* Create last rolls of 100: section */
var last_rolls = document.querySelector("#last_rolls");
var div = document.createElement("div");
div.id = "last_100";
div.className = "last__100";
div.style.display = "flex";
div.style.alignItems = "flex-start";
div.style.gap = "20px";
last_rolls.appendChild(div);

/* Create last rolls of 100::section: contents */
/* last rolls of 100::section::contents: title */
var last_100 = document.querySelector("#last_100");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "LAST 100";
last_100.appendChild(h3);

/* last rolls of 100::section::contents: items */
var div = document.createElement("div");
div.id = "last_100_items";
div.className = "last__100_items";
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.gap = "20px";
last_100.appendChild(div);

/* last rolls of 100::section::contents: red count */
var last_100_items = document.querySelector("#last_100_items");
var div = document.createElement("div");
div.id = "red_stats";
div.className = "red__stats";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "5px";
last_100_items.appendChild(div);

var red_stats = document.querySelector("#red_stats");
var div = document.createElement("div");
div.id = "red_circle";
div.className = "red__circle";
div.style.width = "20px";
div.style.height = "20px";
div.style.borderRadius = "50%";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
div.style.backgroundColor = "red";
red_stats.appendChild(div);

var h3 = document.createElement("h3");
h3.id = "red_count";
h3.style.color = "white";
h3.innerText = "0";
red_stats.appendChild(h3);

/* last rolls of 100::section::contents: green count */
var last_100_items = document.querySelector("#last_100_items");
var div = document.createElement("div");
div.id = "green_stats";
div.className = "green__stats";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "5px";
last_100_items.appendChild(div);

var green_stats = document.querySelector("#green_stats");
var div = document.createElement("div");
div.id = "green_circle";
div.className = "green__circle";
div.style.width = "20px";
div.style.height = "20px";
div.style.borderRadius = "50%";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
div.style.backgroundColor = "green";
green_stats.appendChild(div);

var h3 = document.createElement("h3");
h3.id = "green_count";
h3.style.color = "white";
h3.innerText = "0";
green_stats.appendChild(h3);

/* last rolls of 100::section::contents: black count */
var last_100_items = document.querySelector("#last_100_items");
var div = document.createElement("div");
div.id = "black_stats";
div.className = "black__stats";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "5px";
last_100_items.appendChild(div);

var black_stats = document.querySelector("#black_stats");
var div = document.createElement("div");
div.id = "black_circle";
div.className = "black__circle";
div.style.width = "20px";
div.style.height = "20px";
div.style.borderRadius = "50%";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
div.style.backgroundColor = "#343434";
black_stats.appendChild(div);

var h3 = document.createElement("h3");
h3.id = "black_count";
h3.style.color = "white";
h3.innerText = "0";
black_stats.appendChild(h3);

/* last 10 rolls:section */
var div = document.createElement("div");
div.id = "last_10";
div.className = "last__10";
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.gap = "5px";
last_rolls.appendChild(div);

/* last 10 rolls::section: insert items */
var last_10 = document.querySelector("#last_10");
for (var i = 0; i < 10; i++) {
    var div = document.createElement("div");
    div.id = "circle_" + (i + 1);
    div.className = "circle";
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.borderRadius = "50%";
    div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
    div.style.backgroundColor = "white";
    last_10.appendChild(div);
}

/* barrier */
var mn_rolls_con01 = document.querySelector("#mn-rolls-con01");
var div = document.createElement("div");
div.id = "barrier_02";
div.className = "barrier";
div.style.height = "75px";
mn_rolls_con01.appendChild(div);

/* Create wheel */
var div = document.createElement("div");
div.id = "wheel";
div.className = "wheel_";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.backgroundColor = "#28282B";
div.style.borderRadius = "5px";
div.style.overflow = "hidden";
div.style.padding = "30px";
div.style.gap = "5px";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
mn_rolls_con01.appendChild(div);

/* wheel: insert items */
var wheel = document.querySelector("#wheel");
for (var i = 0; i < 38; i++) {
    var div = document.createElement("div");
    div.id = "square" + (i + 1);
    div.className = "square";
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = "white";
    div.style.padding = "30px";
    wheel.appendChild(div);
}

/* barrier */
var div = document.createElement("div");
div.id = "barrier_03";
div.className = "barrier";
div.style.height = "75px";
mn_rolls_con01.appendChild(div);

/* timer */
var div = document.createElement("div");
div.id = "timer";
div.className = "timer_";
div.style.textAlign = "center";
mn_rolls_con01.appendChild(div);

/* timer: insert */
var timer = document.querySelector("#timer");
var h2 = document.createElement("h2");
h2.style.color = "white";
h2.innerText = "ROLLING IN: 10 SECONDS";
timer.appendChild(h2);

/* barrier */
var div = document.createElement("div");
div.id = "barrier_04";
div.className = "barrier";
div.style.height = "50px";
mn_rolls_con01.appendChild(div);

/* bet place: section */
var div = document.createElement("div");
div.id = "bet_placed";
div.className = "bet__placed";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.alignItems = "flex-start";
div.style.gap = "5px";
div.style.backgroundColor = "#28282B";
div.style.padding = "10px";
div.style.borderRadius = "5px";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
mn_rolls_con01.appendChild(div);

/* bet place::section: text */
var bet_placed = document.querySelector("#bet_placed");
var h5 = document.createElement("h5");
h5.style.color = "white";
h5.innerText = "BET AMOUNT";
bet_placed.appendChild(h5);

/* bet place::section: amount */
var div = document.createElement("div");
div.id = "bet_amount";
div.className = "bet__amount";
div.style.width = "100%";
div.style.display = "flex";
div.style.justifyContent = "space-between";
bet_placed.appendChild(div);

/* bet amount: title */
var bet_amount = document.querySelector("#bet_amount");
var div = document.createElement("div");
div.id = "bet_amount_title";
div.className = "bet__amount_title";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "5px";
bet_amount.appendChild(div);

/* bet amount: insert */
var bet_amount_title = document.querySelector("#bet_amount_title");
var img = document.createElement("img");
img.src = "assets/poker_chip.png";
img.style.width = "25px";
img.style.height = "25px";
bet_amount_title.appendChild(img);
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "1000000";
bet_amount_title.appendChild(h3);

/* bet modify: section */
var div = document.createElement("div");
div.id = "bet_modify";
div.className = "bet__modify";
div.style.display = "flex";
div.style.gap = "5px";
bet_amount.appendChild(div);

/* bet modify: insert */
/* clear_button */
var button = document.createElement("button");
button.id = "clear_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var clear_button = document.querySelector("#clear_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "CLEAR";
clear_button.appendChild(h3);

/* last_button */
var button = document.createElement("button");
button.id = "last_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var last_button = document.querySelector("#last_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "LAST";
last_button.appendChild(h3);

/* plus_button */
var button = document.createElement("button");
button.id = "plus_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var plus_button = document.querySelector("#plus_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "+1";
plus_button.appendChild(h3);

/* plus_ten_button */
var button = document.createElement("button");
button.id = "plus_ten_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var plus_ten_button = document.querySelector("#plus_ten_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "+10";
plus_ten_button.appendChild(h3);

/* plus_hundred_button */
var button = document.createElement("button");
button.id = "plus_hundred_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var plus_hundred_button = document.querySelector("#plus_hundred_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "+100";
plus_hundred_button.appendChild(h3);

/* plus_thousand_button */
var button = document.createElement("button");
button.id = "plus_thousand_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var plus_thousand_button = document.querySelector("#plus_thousand_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "+1000";
plus_thousand_button.appendChild(h3);

/* half_button */
var button = document.createElement("button");
button.id = "half_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var half_button = document.querySelector("#half_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "1/2";
half_button.appendChild(h3);

/* times_button */
var button = document.createElement("button");
button.id = "times_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var times_button = document.querySelector("#times_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "x2";
times_button.appendChild(h3);

/* max_button */
var button = document.createElement("button");
button.id = "max_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var max_button = document.querySelector("#max_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "MAX";
max_button.appendChild(h3);

/* barrier */
var div = document.createElement("div");
div.id = "barrier_05";
div.className = "barrier";
div.style.height = "25px";
mn_rolls_con01.appendChild(div);

/* bet type: section */
var div = document.createElement("div");
div.id = "bet_type";
div.className = "bet__type";
div.style.display = "flex";
div.style.justifyContent = "space-between";
mn_rolls_con01.appendChild(div);

/* bet type::section: red */
var div = document.createElement("div");
div.id = "bet_type_red";
div.className = "bet__type_red";
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.flexDirection = "column";
div.style.gap = "5px";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
div.style.backgroundColor = "#28282B";
div.style.borderRadius = "5px";
bet_type.appendChild(div);

/* bet type::section::red: insert */
var bet_type_red = document.querySelector("#bet_type_red");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "WIN 2X";
h3.style.padding = "5px";
bet_type_red.appendChild(h3);
var button = document.createElement("button");
button.id = "bet_type_red_button";
button.style.backgroundColor = "red";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px 100px";
bet_type_red.appendChild(button);
var bet_type_red_button = document.querySelector("#bet_type_red_button");
var h2 = document.createElement("h2");
h2.style.color = "white";
h2.innerText = "PLACE BET";
bet_type_red_button.appendChild(h2);

/* bet type::section: green */
var div = document.createElement("div");
div.id = "bet_type_green";
div.className = "bet__type_green";
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.flexDirection = "column";
div.style.gap = "5px";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
div.style.backgroundColor = "#28282B";
div.style.borderRadius = "5px";
bet_type.appendChild(div);

/* bet type::section::green: insert */
var bet_type_green = document.querySelector("#bet_type_green");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "WIN 14X";
h3.style.padding = "5px";
bet_type_green.appendChild(h3);
var button = document.createElement("button");
button.id = "bet_type_green_button";
button.style.backgroundColor = "green";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px 100px";
bet_type_green.appendChild(button);
var bet_type_green_button = document.querySelector("#bet_type_green_button");
var h2 = document.createElement("h2");
h2.style.color = "white";
h2.innerText = "PLACE BET";
bet_type_green_button.appendChild(h2);

/* bet type::section: black */
var div = document.createElement("div");
div.id = "bet_type_black";
div.className = "bet__type_black";
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.flexDirection = "column";
div.style.gap = "5px";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
div.style.backgroundColor = "#28282B";
div.style.borderRadius = "5px";
bet_type.appendChild(div);

/* bet type::section::black: insert */
var bet_type_black = document.querySelector("#bet_type_black");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "WIN 2X";
h3.style.padding = "5px";
bet_type_black.appendChild(h3);
var button = document.createElement("button");
button.id = "bet_type_black_button";
button.style.backgroundColor = "#343434";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px 100px";
bet_type_black.appendChild(button);
var bet_type_black_button = document.querySelector("#bet_type_black_button");
var h2 = document.createElement("h2");
h2.style.color = "white";
h2.innerText = "PLACE BET";
bet_type_black_button.appendChild(h2);
