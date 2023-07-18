
function  quotes(){
    var quotes=[
        {name:"Oscar Wilde", quote:"“Be yourself; everyone else is already taken.”"},
        {name:"Marilyn Monroe", quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"},
        {name:"Albert Einstein", quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"},
        {name:"Frank Zappa", quote:"“So many books, so little time.”"},
        {name:"Marcus Tullius Cicero",quote:"“A room without books is like a body without a soul.”"},
        {name:"Bernard M. Baruch",quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"}
    ];
        var box = quotes[Math.floor(Math.random()*quotes.length)];
    document.getElementById('demo1').innerHTML=`<h4 class="my-3">${box.name}</h4>`;
    document.getElementById('demo2').innerHTML=`<h4 class="my-3">${box.quote}</h4>`;

}