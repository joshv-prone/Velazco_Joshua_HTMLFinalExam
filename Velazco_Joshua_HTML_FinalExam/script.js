// ==================== BOTH INTRO AND EXIT NAVIGATION ====================

// Slide 1 -> Slide 2 (Also used when clicking "No" on "Are you sure?")
function goToQuestion() {
    document.getElementById("intro-slide-1").style.display = "none";
    document.getElementById("intro-slide-3").style.display = "none";
    document.getElementById("intro-slide-2").style.display = "block";
}

// Slide 2 ("Yes") -> Show Main Formula 1 Page
function enterMainSite() {
    document.getElementById("intro-slide-2").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}

// Slide 2 ("No") -> Slide 3 ("Are you sure?")
function goToConfirm() {
    document.getElementById("intro-slide-2").style.display = "none";
    document.getElementById("intro-slide-3").style.display = "block";
}

// Slide 3 ("Yes") -> Exit the site (with fallback screen)
function exitSite() {
    window.close();
    document.getElementById("intro-slide-3").style.display = "none";
    document.getElementById("intro-slide-4").style.display = "block";
}

// Main Page ("Exit" button) -> Go back to F1 Logo Start Screen
function exitFromMain() {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("intro-slide-1").style.display = "block";
}

// Exited Screen ("Back to Website" button) -> Go back to F1 Logo Start Screen
function backToStart() {
    document.getElementById("intro-slide-4").style.display = "none";
    document.getElementById("intro-slide-1").style.display = "block";
}

// ==================== MAIN PAGE INTERACTIVE FEATURES ====================

// 1. Counting maximum cheers (5 fans)
let cheers = 0;
function addCheer() {
    cheers = cheers + 1;
    document.getElementById("cheer-count").innerText = cheers;

    if (cheers === 5) {
        alert("🏁 Lights out and away we go! 5 cheers reached!");
    }
    else if (cheers > 5) {
        alert("🏁 Maximum cheers reached! You can't cheer more than 5 times.");
    }
}

// 2. Driver Switcher
function showDriver(driver) {
    let box = document.getElementById("driver-box");

    if (driver === "hamilton") {
        box.innerHTML = "<strong>Lewis Hamilton (Scuderia Ferrari):</strong> Lewis Hammilton is a British racing driver who has won multiple championships and is known for his skill, consistency, and competitive spirit on the track. He has Seven World Drivers' Championship titles, making him one of the most successful drivers in Formula 1 history equalling Michael Schumacher record with also 7 World Championships. Lewis Hamilton has also broken Michael Schumacher's record with 106 Grand Prix Victories and 105 pole positions. ";
    } else if (driver === "antonelli") {
        box.innerHTML = "<strong>Andrea Kimi Antonelli (Mercedes-AMG):</strong> Kimi Antonelli is a rising Italian racing prodigy representing Mercedes in Formula 1. He is also the youngest ever world champion in F1. He claimed his first F1 title in 2026.";
    } else if (driver === "verstappen") {
        box.innerHTML = "<strong>Max Verstappen (Red Bull Racing):</strong> Max Verstappen is a Dutch racing driver who has won Four Formula 1 World Championships and is known for dominant pace and aggressive racecraft. Max Verstappen has won 75 Grand Prix races and has 51 pole positions.";
    }else if (driver === "schumacher") {
        box.innerHTML = "<strong>Michael Schumacher (Ferrari):</strong> Michael Schumacher is a German racing driver who has won Seven Formula 1 World Championships alongside Lewis Hamilton and is also one of the most successful drivers in motorsport history.Michael Schumacher has also broken many records in Formula 1 including the most World Championships (7), most Grand Prix Victories (91), and most fastest laps (77). But in victories and pole positions, Lewis Hamilton has broken Michael Schumacher's record with 106 Grand Prix Victories and 105 pole positions.";
   }
}

// 3. Dark and Light Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}
