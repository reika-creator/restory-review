const reviewUrl = "https://search.google.com/local/writereview?placeid=ChIJsfRIZHGHGGARVrttvZnYcyA";

function generateReview() {
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;

    const templates = [
        `${q2}、西葛西のRe:Storyさんに伺いました。${q1}が気になっていましたが、痛くない水光ジェットで肌が生き返る感覚です。${q3}、これからもお肌を根本改善していきたいです。`,
        `${q1}をどうにかしたくて、${q2}Re:Storyさんへ。魔法ではなく肌を根本改善していくという説明に納得しました。${q3}、3〜5回と続けていくのが楽しみです！`,
        `知人に紹介されRe:Storyさんを予約しました。${q1}の悩みに対し、丁寧なカウンセリングで安心できました。${q3}ので、第一印象が変わるのが今からワクワクしています。`
    ];

    const randomText = templates[Math.floor(Math.random() * templates.length)];
    document.getElementById('outputText').value = randomText;
    document.getElementById('resultArea').style.display = 'block';
}

function copyAndGo() {
    const copyText = document.getElementById("outputText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    alert("文章をコピーしました！開いた画面で「貼り付け」をして投稿してください。");
    window.location.href = reviewUrl;
}
