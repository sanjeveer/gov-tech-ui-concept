// ===================================================
// NEW PRELOADER LOGIC WITH TIMER
// ===================================================
window.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('preloader-bar');
    const percentText = document.getElementById('preloader-percent');
    const statusText = document.getElementById('preloader-text');
    const timerText = document.getElementById('preloader-timer');
    
    let currentPercent = 0;
    const totalDurationSec = 3.5; // 3.5 Seconds
    let remainingTime = totalDurationSec;

    const loadingSteps = [
        "பாதுகாப்பான இணைப்பு நிறுவப்படுகிறது...",
        "அரசு தரவுத்தளத்துடன் இணைக்கப்படுகிறது...",
        "நலத்திட்டங்கள் ஒருங்கிணைக்கப்படுகிறது...",
        "போர்ட்டல் தயாராகிறது..."
    ];

    const intervalTime = 30;
    const stepIncrement = 100 / ((totalDurationSec * 1000) / intervalTime);

    const progressInterval = setInterval(() => {
        currentPercent += stepIncrement;
        remainingTime = Math.max(0, totalDurationSec - (currentPercent / 100 * totalDurationSec));

        if (currentPercent < 30 && statusText) statusText.innerText = loadingSteps[0];
        else if (currentPercent < 60 && statusText) statusText.innerText = loadingSteps[1];
        else if (currentPercent < 85 && statusText) statusText.innerText = loadingSteps[2];
        else if (statusText) statusText.innerText = loadingSteps[3];

        if (progressBar) progressBar.style.width = `${Math.min(100, currentPercent)}%`;
        if (percentText) percentText.innerText = `${Math.min(100, Math.floor(currentPercent))}%`;
        if (timerText) timerText.innerText = `${remainingTime.toFixed(1)}s`;

        if (currentPercent >= 100) {
            clearInterval(progressInterval);
            if (percentText) percentText.innerText = `100%`;
            if (timerText) timerText.innerText = `0.0s`;

            setTimeout(() => {
                if (preloader) {
                    preloader.classList.add('fade-out');
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 800);
                }
            }, 300);
        }
    }, intervalTime);
});
// 2. 6 LANGUAGES DICTIONARY & VOICE CODES
const translations = {
    ta: {
        voiceCode: 'ta-IN',
        title: "தமிழ்நாடு அரசு நலத்திட்டங்கள்",
        loading: "போர்ட்டல் ஏற்றப்படுகிறது...",
        accessibility: "அணுகல் வசதி:",
        contrast: "மாறுபாடு",
        read_screen: "திரையை வாசி",
        header_title: "தமிழ்நாடு அரசு நலத்திட்டங்கள்",
        header_sub: "தமிழ்நாடு அரசு நலத்திட்டங்கள் போர்டல் 2026",
        hero_title: "விவசாயிகள் & மக்கள் நல திட்டங்கள் 2026",
        hero_sub: "அனைத்து அரசு நலத்திட்டங்களையும் ஒரே இடத்தில் அறிந்து பயன்பெறுங்கள்.",
        chat_header: "AI நலத்திட்ட உதவியாளர்",
        placeholder: "உங்களுக்குத் தேவையான நலத்திட்டம் பற்றி கேட்கவும்...",
        camera: "கேமரா",
        upload_photo: "படம் பதிவேற்ற",
        upload_doc: "ஆவணம் பதிவேற்ற",
        chat_footer: "வணக்கம்! உங்கள் கேள்விகளைத் தட்டச்சு செய்யவோ அல்லது குரல் வழியாகக் கேட்கவோ செய்யலாம்."
    },
    en: {
        voiceCode: 'en-US',
        title: "TN Govt Welfare Schemes",
        loading: "Portal Loading...",
        accessibility: "Accessibility:",
        contrast: "Contrast",
        read_screen: "Read Screen",
        header_title: "Tamil Nadu Govt Welfare Schemes",
        header_sub: "Govt of Tamil Nadu Welfare Schemes Portal 2026",
        hero_title: "Farmers & Public Welfare Schemes 2026",
        hero_sub: "Discover and benefit from all government welfare schemes in one place.",
        chat_header: "AI Welfare Assistant",
        placeholder: "Ask about any welfare scheme you need...",
        camera: "Camera",
        upload_photo: "Upload Photo",
        upload_doc: "Upload Document",
        chat_footer: "Welcome! You can type your queries or ask via voice."
    },
    hi: {
        voiceCode: 'hi-IN',
        title: "तमिलनाडु कल्याण योजनाएं",
        loading: "पोर्टल लोड हो रहा है...",
        accessibility: "अभिगम्यता:",
        contrast: "विपरीत",
        read_screen: "स्क्रीन पढ़ें",
        header_title: "तमिलनाडु सरकार कल्याण योजनाएं",
        header_sub: "तमिलनाडु सरकार कल्याण योजना पोर्टल 2026",
        hero_title: "किसान और जन कल्याण योजनाएं 2026",
        hero_sub: "सभी सरकारी योजनाओं की जानकारी एक ही स्थान पर प्राप्त करें।",
        chat_header: "एआई कल्याण सहायक",
        placeholder: "अपनी आवश्यक योजना के बारे में पूछें...",
        camera: "कैमरा",
        upload_photo: "फोटो अपलोड करें",
        upload_doc: "दस्तावेज़ अपलोड करें",
        chat_footer: "नमस्ते! आप अपने प्रश्न टाइप कर सकते हैं या आवाज से पूछ सकते हैं।"
    },
    te: {
        voiceCode: 'te-IN',
        title: "తమిళనాడు సంక్షేమ పథకాలు",
        loading: "పోర్టల్ లోడ్ అవుతోంది...",
        accessibility: "యాక్సెసిబిలిటీ:",
        contrast: "కాంట్రాస్ట్",
        read_screen: "స్క్రీన్ చదవండి",
        header_title: "తమిళనాడు ప్రభుత్వ సంక్షేమ పథకాలు",
        header_sub: "తమిళనాడు ప్రభుత్వ సంక్షేమ పథకాల పోర్టల్ 2026",
        hero_title: "రైతులు & ప్రజల సంక్షేమ పథకాలు 2026",
        hero_sub: "అన్ని ప్రభుత్వ పథకాల వివరాలను ఒకే చోట తెలుసుకోండి.",
        chat_header: "AI సంక్షేమ సహాయకుడు",
        placeholder: "మీకు కావలసిన పథకం గురించి అడగండి...",
        camera: "కెమెరా",
        upload_photo: "ఫోటో అప్‌లోడ్",
        upload_doc: "పత్రం అప్‌లోడ్",
        chat_footer: "స్వాగతం! మీరు మీ ప్రశ్నలను టైప్ చేయవచ్చు లేదా వాయిస్ ద్వారా అడగవచ్చు."
    },
    kn: {
        voiceCode: 'kn-IN',
        title: "ತಮಿಳುನಾಡು ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು",
        loading: "ಪೋರ್ಟಲ್ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
        accessibility: "ಪ್ರವೇಶಿಸುವಿಕೆ:",
        contrast: "ಕಾಂಟ್ರಾಸ್ಟ್",
        read_screen: "ಸ್ಕ್ರೀನ್ ಓದಿ",
        header_title: "ತಮಿಳುನಾಡು ಸರ್ಕಾರಿ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು",
        header_sub: "ತಮಿಳುನಾಡು ಸರ್ಕಾರಿ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳ ಪೋರ್ಟಲ್ 2026",
        hero_title: "ರೈತರು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು 2026",
        hero_sub: "ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಮಾಹಿತಿಯನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಪಡೆಯಿರಿ.",
        chat_header: "AI ಕಲ್ಯಾಣ ಸಹಾಯಕ",
        placeholder: "ನಿಮಗೆ ಬೇಕಾದ ಯೋಜನೆಯ ಬಗ್ಗೆ ಕೇಳಿ...",
        camera: "ಕ್ಯಾಮೆರಾ",
        upload_photo: "ಫೋಟೋ ಅಪ್‌ಲೋಡ್",
        upload_doc: "ದಾಖಲೆ ಅಪ್‌ಲೋಡ್",
        chat_footer: "ಸ್ವಾಗತ! ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳನ್ನು ಟೈಪ್ ಮಾಡಬಹುದು ಅಥವಾ ಧ್ವನಿ ಮೂಲಕ ಕೇಳಬಹುದು."
    },
    ml: {
        voiceCode: 'ml-IN',
        title: "തമിഴ്‌നാട് ക്ഷേമ പദ്ധതികൾ",
        loading: "പോർട്ടൽ ലോഡുചെയ്യുന്നു...",
        accessibility: "ആക്സസിബിലിറ്റി:",
        contrast: "കോൺട്രാസ്റ്റ്",
        read_screen: "സ്‌ക്രീൻ വായിക്കുക",
        header_title: "തമിഴ്‌നാട് സർക്കാർ ക്ഷേമ പദ്ധതികൾ",
        header_sub: "തമിഴ്‌നാട് സർക്കാർ ക്ഷേമ പദ്ധതി പോർട്ടൽ 2026",
        hero_title: "കർഷക & ജനക്ഷേമ പദ്ധതികൾ 2026",
        hero_sub: "എല്ലാ സർക്കാർ പദ്ധതികളെക്കുറിച്ചും ഒരിടത്ത് നിന്ന് അറിയുക.",
        chat_header: "AI ക്ഷേമ സഹായി",
        placeholder: "നിങ്ങൾക്ക് ആവശ്യമായ പദ്ധതിയെക്കുറിച്ച് ചോദിക്കുക...",
        camera: "ക്യാമറ",
        upload_photo: "ഫോട്ടോ അപ്‌ലോഡ്",
        upload_doc: "രേഖ അപ്‌ലോഡ്",
        chat_footer: "സ്വാഗതം! ചോദ്യങ്ങൾ ടൈപ്പ് ചെയ്യുകയോ വോയ്സ് വഴി ചോദിക്കുകയോ ചെയ്യാം."
    }
};

let currentLang = 'ta';

// 3. DYNAMIC LANGUAGE CHANGE FUNCTION
function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const t = translations[lang];

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (t[key]) {
            el.innerText = t[key];
        }
    });

    const chatInput = document.getElementById('chatInput');
    if (chatInput && t.placeholder) {
        chatInput.placeholder = t.placeholder;
    }
}

// MULTI-LANGUAGE AUDIO READOUT
function speakText(text) {
    if (!('speechSynthesis' in window)) {
        alert("Your browser does not support Speech Synthesis.");
        return;
    }

    window.speechSynthesis.cancel(); // Stop any ongoing audio

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Google Translate Dropdown-ல் உள்ள மொழியைக் கண்டறியும்
    const currentLang = document.querySelector('.goog-te-combo')?.value || 'ta';

    const voiceLangMap = {
        'ta': 'ta-IN',
        'en': 'en-US',
        'hi': 'hi-IN',
        'te': 'te-IN',
        'kn': 'kn-IN',
        'ml': 'ml-IN'
    };

    utterance.lang = voiceLangMap[currentLang] || 'ta-IN';
    utterance.rate = 0.9;

    window.speechSynthesis.speak(utterance);
}
// READ SCREEN FUNCTION
function readEntireScreen() {
    const heroTitle = document.querySelector('.hero-title')?.innerText || '';
    const heroSub = document.querySelector('.hero-subtitle')?.innerText || '';
    speakText(`${heroTitle}. ${heroSub}`);
}

// 5. SPEECH RECOGNITION (VOICE INPUT)
function startVoiceRecognition(callback) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Your browser does not support Voice Input.");
        return;
    }

    const recognition = new SpeechRecognition();
    const currentLang = document.querySelector('.goog-te-combo')?.value || 'ta';
    
    const langMap = {
        'ta': 'ta-IN',
        'en': 'en-US',
        'hi': 'hi-IN',
        'te': 'te-IN',
        'kn': 'kn-IN',
        'ml': 'ml-IN'
    };

    recognition.lang = langMap[currentLang] || 'ta-IN';
    recognition.continuous = false;

    recognition.onstart = () => {
        const micBtn = document.getElementById('topAiMicBtn');
        if (micBtn) micBtn.style.background = "#ef4444";
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (typeof callback === 'function') {
            callback(transcript);
        } else {
            const input = document.getElementById('scheme-input') || document.getElementById('chat-input');
            if (input) input.value = transcript;
        }
    };

    recognition.onerror = (event) => {
        if (event.error === 'not-allowed') {
            alert("Microphone permission denied! Allow it in browser settings.");
        } else if (event.error !== 'no-speech') {
            alert("Voice recognition error: " + event.error);
        }
    };

    recognition.onend = () => {
        const micBtn = document.getElementById('topAiMicBtn');
        if (micBtn) micBtn.style.background = "";
    };

    try {
        recognition.start();
    } catch (e) {
        console.log("Restart bug fix", e);
    }
}

// TOP AI MIC BUTTON CLICK
document.addEventListener('DOMContentLoaded', () => {
    const topAiMicBtn = document.getElementById('topAiMicBtn');
    if (topAiMicBtn) {
        topAiMicBtn.addEventListener('click', () => {
            startVoiceRecognition((transcript) => {
                const chatInput = document.getElementById('chatInput');
                if (chatInput) chatInput.value = transcript;
                speakText(transcript);
            });
        });
    }
});

// CHAT MIC BUTTON CLICK
function togglechatMic() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert("உங்கள் பிரவுசரில் Voice Input வசதி இல்லை.");
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    const currentLang = document.querySelector('.goog-te-combo')?.value || 'ta-IN';
    
    recognition.lang = currentLang === 'ta' ? 'ta-IN' : currentLang;
    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        const chatInput = document.getElementById('chat-input') || document.querySelector('.ai-chat-box input');
        if (chatInput) {
            chatInput.value = transcript;
            handleAiChatSubmit(); // பேசினதும் தானா AI பதில் தேடும்
        }
    };
}

// 6. ACCESSIBILITY & CONTROLS
let currentFontSize = 100;
function changeFontSize(direction) {
    if (direction === 0) currentFontSize = 100;
    else currentFontSize += direction * 10;
    document.body.style.fontSize = currentFontSize + '%';
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// ATTACHMENT POPUP TOGGLE
function toggleAttachMenu() {
    const attachMenu = document.getElementById('attachMenu');
    if (attachMenu) attachMenu.classList.toggle('active');
}

function triggerCamera() { document.getElementById('cameraInput')?.click(); }
function triggerPhotoUpload() { document.getElementById('photoInput')?.click(); }
function triggerDocUpload() { document.getElementById('docInput')?.click(); }

function handleFileSelect(event, type) {
    const file = event.target.files[0];
    if (file) {
        const chatInput = document.getElementById('chatInput');
        if (chatInput) chatInput.value = `[${type}: ${file.name}] `;
    }
}

// AI KNOWLEDGE BASE DATA
const aiKnowledgeBase = {
    'pudhumai': {
        'ta': 'புதுமைப் பெண் திட்டம்: அரசுப் பள்ளியில் 6 முதல் 12-ஆம் வகுப்பு வரை படித்த மாணவிகளுக்கு உயர்கல்விக்காக மாதம் ₹1,000 வழங்கி ஊக்கப்படுத்தப்படுகிறது.',
        'en': 'Pudhumai Penn Scheme: Offers ₹1,000 monthly assistance to girl students who studied in govt schools from classes 6 to 12 for higher education.',
        'hi': 'पुदुमई पेन योजना: सरकारी स्कूलों से 6वीं से 12वीं तक पढ़ी छात्राओं को उच्च शिक्षा के लिए ₹1,000 मासिक सहायता दी जाती है।',
        'te': 'పుదుమై పెన్ పథకం: ప్రభుత్వ పాఠశాలల్లో 6 నుండి 12వ తరగతి వరకు చదివిన విద్యార్థినులకు ఉన్నత చదువుల కోసం నెలకు ₹1,000 ఆర్థిక సాయం అందించబడుతుంది.',
        'kn': 'ಪುದುಮೈ ಪೆನ್ ಯೋಜನೆ: ಸರ್ಕಾರಿ ಶಾಲೆಯಲ್ಲಿ 6 ರಿಂದ 12 ನೇ ತರಗತಿವರೆಗೆ ವ್ಯಾಸಂಗ ಮಾಡಿದ ವಿದ್ಯಾರ್ಥಿನಿಯರಿಗೆ ಉನ್ನತ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ತಿಂಗಳಿಗೆ ₹1,000 ಧನಸಹಾಯ ನೀಡಲಾಗುತ್ತದೆ.',
        'ml': 'പുതുമൈ പെൺ പദ്ധതി: സർക്കാർ സ്കൂളുകളിൽ 6 മുതൽ 12 വരെ പഠിച്ച വിദ്യാർത്ഥിനികൾക്ക് ഉന്നത വിദ്യാഭ്യാസത്തിനായി പ്രതിമാസം ₹1,000 സഹായം നൽകുന്നു.'
    },
    'magalir': {
        'ta': 'கலைஞர் மகளிர் உரிமைத் திட்டம்: குடும்பத் தலைவிகளுக்கு மாதந்தோறும் ₹1,000 வங்கி கணக்கில் நேரடியாகச் செலுத்தப்பட்டு வாழ்வாதாரம் உயர்த்தப்படுகிறது.',
        'en': 'Magalir Urimai Thogai Scheme: ₹1,000 monthly financial aid directly transferred to the bank accounts of women family heads.',
        'hi': 'मगलिर उरिमई योजना: महिला गृहस्वामियों के बैंक खातों में प्रति माह ₹1,000 की राशि सीधे हस्तांतरित की जाती है।',
        'te': 'మగళిర్ ఉరిమై పథకం: కుటుంబ పెద్దగా ఉన్న మహిళల బ్యాంకు ఖాతాల్లో ప్రతి నెలా ₹1,000 నేరుగా జమ చేయబడుతుంది.',
        'kn': 'ಮಗಳಿರ್ ಉರಿಮೈ ಯೋಜನೆ: ಕುಟುಂಬದ ಮಹಿಳಾ ಮುಖ್ಯಸ್ಥರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಪ್ರತಿ ತಿಂಗಳು ₹1,000 ನೇರವಾಗಿ ಜಮಾ ಮಾಡಲಾಗುತ್ತದೆ.',
        'ml': 'മകളിർ ഉരിമൈ പദ്ധതി: കുടുംബനാഥകളായ സ്ത്രീകൾക്ക് പ്രതിമാസം ₹1,000 ബാങ്ക് അക്കൗണ്ടിലേക്ക് നേരിട്ട് നൽകുന്നു.'
    },
    'naan': {
        'ta': 'நான் முதல்வன் திட்டம்: தமிழ்நாட்டின் இளைஞர்களுக்குத் தொழிலும் வேலைவாய்ப்புத் திறன்களும் இலவசமாகச் சொல்லித்தரப்படும் சிறப்புத் திட்டம்.',
        'en': 'Naan Mudhalvan Scheme: Skill development initiative aimed at empowering TN youth with career development and technical skills.',
        'hi': 'नान मुधालवन योजना: तमिलनाडु के युवाओं के कौशल विकास और रोजगार कौशल को बढ़ावा देने के लिए बनाई गई योजना।',
        'te': 'నాన్ ముదల్వన్ పథకం: తమిళనాడు యువతకు ఉద్యోగ, సాంకేతిక నైపుణ్యాలను అభివృద్ధి చేసే ప్రత్యేక పథకం.',
        'kn': 'ನಾನ್ ಮುದಾಲ್ವನ್ ಯೋಜನೆ: ತಮಿಳುನಾಡಿನ ಯುವಕರಿಗೆ ಉದ್ಯೋಗ ಮತ್ತು ಕೌಶಲ್ಯ ತರಬೇತಿ ನೀಡುವ ಉಚಿತ ಯೋಜನೆ.',
        'ml': 'നാൺ മുതൽവൻ പദ്ധതി: തമിഴ്‌നാട്ടിലെ യുവാക്കൾക്ക് തൊഴിൽ, സാങ്കേതിക നൈപുണ്യങ്ങൾ സൗജന്യമായി നൽകുന്ന പദ്ധതി.'
    },
    'default': {
        'ta': 'வணக்கம்! நான் தமிழ்நாடு அரசு நலத்திட்ட AI உதவியாளர். புதுமைப் பெண், மகளிர் உரிமைத் தொகை, நான் முதல்வன் போன்ற திட்டங்களைப் பற்றிக் கேட்கலாம்.',
        'en': 'Hello! I am TN Govt Schemes AI Assistant. You can ask about Pudhumai Penn, Magalir Urimai, or Naan Mudhalvan schemes.',
        'hi': 'नमस्ते! मैं तमिलनाडु सरकार योजना AI सहायक हूँ। आप विभिन्न सरकारी कल्याणकारी योजनाओं के बारे में पूछ सकते हैं।',
        'te': 'నమస్కారం! నేను తమిళనాడు ప్రభుత్వ సంక్షేమ పథకాల AI సహాయకుడిని.',
        'kn': 'ನಮಸ್ಕಾರ! ನಾನು ತಮಿಳುನಾಡು ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ AI ಸಹಾಯಕ.',
        'ml': 'നമസ്കാരം! ഞാൻ തമിഴ്‌നാട് സർക്കാർ പദ്ധതികളുടെ AI അസിസ്റ്റന്റാണ്.'
    }
};

let lastAiResponse = ""; 

function handleKeyPress(event) {
    if (event.key === 'Enter') handleAiChatSubmit();
}
// ===================================================
// ADVANCED PRELOADER LOGIC
// ===================================================
window.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('preloader-bar');
    const percentText = document.getElementById('preloader-percent');
    const statusText = document.getElementById('preloader-text');
    const timerText = document.getElementById('preloader-timer');
    
    let currentPercent = 0;
    const totalDurationSec = 3.5; // 3.5 வினாடிகள் லோடிங்
    let remainingTime = totalDurationSec;

    const loadingSteps = [
        "பாதுகாப்பான இணைப்பு நிறுவப்படுகிறது...",
        "அரசு தரவுத்தளத்துடன் இணைக்கப்படுகிறது...",
        "நலத்திட்டங்கள் ஒருங்கிணைக்கப்படுகிறது...",
        "போர்ட்டல் தயாராகிறது..."
    ];

    const intervalTime = 30; // Milliseconds
    const stepIncrement = 100 / ((totalDurationSec * 1000) / intervalTime);

    const progressInterval = setInterval(() => {
        currentPercent += stepIncrement;
        remainingTime = Math.max(0, totalDurationSec - (currentPercent / 100 * totalDurationSec));

        // Step text adjustment
        if (currentPercent < 28 && statusText) statusText.innerText = loadingSteps[0];
        else if (currentPercent < 58 && statusText) statusText.innerText = loadingSteps[1];
        else if (currentPercent < 85 && statusText) statusText.innerText = loadingSteps[2];
        else if (statusText) statusText.innerText = loadingSteps[3];

        // Updates UI
        if (progressBar) progressBar.style.width = `${Math.min(100, currentPercent)}%`;
        if (percentText) percentText.innerText = `${Math.min(100, Math.floor(currentPercent))}%`;
        if (timerText) timerText.innerText = `${remainingTime.toFixed(1)}s`;

        // Completed
        if (currentPercent >= 100) {
            clearInterval(progressInterval);
            if (percentText) percentText.innerText = `100%`;
            if (timerText) timerText.innerText = `0.0s`;

            setTimeout(() => {
                if (preloader) {
                    preloader.classList.add('fade-out');
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 800);
                }
            }, 300);
        }
    }, intervalTime);
});
// ==========================================
// SMART AI CHAT & HYBRID VOICE SYSTEM
// ==========================================

// Helper: Append Message to UI Chat Box
function appendChatMessage(sender, text) {
    const chatContainer = document.querySelector('.ai-chat-messages') || 
                          document.getElementById('chat-messages') || 
                          document.querySelector('.chat-body');

    if (chatContainer) {
        const msgDiv = document.createElement('div');
        msgDiv.style.margin = "8px 0";
        msgDiv.style.padding = "10px 14px";
        msgDiv.style.borderRadius = "12px";
        msgDiv.style.maxWidth = "80%";
        msgDiv.style.wordWrap = "break-word";
        
        if (sender === 'user') {
            msgDiv.style.background = "#007bff";
            msgDiv.style.color = "#fff";
            msgDiv.style.marginLeft = "auto";
            msgDiv.style.textAlign = "right";
        } else {
            msgDiv.style.background = "#2a2d3d";
            msgDiv.style.color = "#fff";
            msgDiv.style.marginRight = "auto";
            msgDiv.style.textAlign = "left";
            msgDiv.style.border = "1px solid #3a3f58";
        }

        msgDiv.innerHTML = text;
        chatContainer.appendChild(msgDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}

// 1. CHAT INPUT SUBMIT (Text to Text UI Answer)
function handleAiChatSubmit() {
    const chatInput = document.getElementById('chat-input') || 
                      document.getElementById('chatInput') || 
                      document.querySelector('.ai-chat-box input');

    if (!chatInput || !chatInput.value.trim()) return;

    const userText = chatInput.value.trim();
    const userQuery = userText.toLowerCase();
    const currentLang = document.querySelector('.goog-te-combo')?.value || 'ta';

    // Show User Message in UI
    appendChatMessage('user', userText);
    chatInput.value = ''; // Clear Input

    // Scheme Matching Logic
    let matchedTopic = 'default';
    if (userQuery.includes("புதுமை") || userQuery.includes("pudhumai") || userQuery.includes("பெண்")) {
        matchedTopic = 'pudhumai';
    } else if (userQuery.includes("மகளிர்") || userQuery.includes("magalir") || userQuery.includes("உரிமை") || userQuery.includes("1000")) {
        matchedTopic = 'magalir';
    } else if (userQuery.includes("முதல்வன்") || userQuery.includes("mudhalvan") || userQuery.includes("naan")) {
        matchedTopic = 'naan';
    }

    const topicData = aiKnowledgeBase[matchedTopic] || aiKnowledgeBase['default'];
    window.lastAiResponse = topicData[currentLang] || topicData['ta'] || topicData['en'];

    // Show AI Response in UI
    setTimeout(() => {
        appendChatMessage('ai', `🤖 <b>AI Assistant:</b><br>${window.lastAiResponse}`);
    }, 400);
}

// 2. CHAT BLUE MIC (Voice to Text Input for Uneducated Users)
function togglechatMic() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("உங்கள் பிரவுசரில் Voice Input வசதி இல்லை. Google Chrome பயன்படுத்தவும்.");
        return;
    }
    
    const recognition = new SpeechRecognition();
    const currentLang = document.querySelector('.goog-te-combo')?.value || 'ta';
    
    // Multi-language voice recognition setup
    const langMap = { 'ta': 'ta-IN', 'en': 'en-US', 'hi': 'hi-IN', 'te': 'te-IN', 'kn': 'kn-IN', 'ml': 'ml-IN' };
    recognition.lang = langMap[currentLang] || 'ta-IN';
    
    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        const chatInput = document.getElementById('chat-input') || 
                          document.getElementById('chatInput') || 
                          document.querySelector('.ai-chat-box input');
        if (chatInput) {
            chatInput.value = transcript;
            handleAiChatSubmit(); // Auto Submit after speaking
        }
    };
}

// 3. TOP RED MIC (Text to Voice Readout - 5 Languages)
function triggerVoiceResponse() {
    const currentLang = document.querySelector('.goog-te-combo')?.value || 'ta';
    
    if (!window.lastAiResponse) {
        window.lastAiResponse = aiKnowledgeBase['default'][currentLang] || aiKnowledgeBase['default']['ta'];
    }

    // Speech Synthesis with 5 Languages Support
    window.speechSynthesis.cancel(); // Stop ongoing speech
    const utterance = new SpeechSynthesisUtterance(window.lastAiResponse);
    
    const speechLangMap = {
        'ta': 'ta-IN',
        'en': 'en-US',
        'hi': 'hi-IN',
        'te': 'te-IN',
        'kn': 'kn-IN',
        'ml': 'ml-IN'
    };

    utterance.lang = speechLangMap[currentLang] || 'ta-IN';
    utterance.rate = 0.9; // Smooth speed
    window.speechSynthesis.speak(utterance);
}
// ===================================================
// FEATURE 3: FACT-CHECKER LOGIC
// ===================================================
function checkFakeNews() {
    const query = document.getElementById('fact-input').value.trim().toLowerCase();
    const resultBox = document.getElementById('fact-result');

    if (!query) {
        alert("தயவுசெய்து செய்தியை டைப் செய்யவும்!");
        return;
    }

    resultBox.classList.remove('hidden', 'fake', 'real');

    // Fake keywords check
    if (query.includes("லலேப்டாப்") || query.includes("5000") || query.includes("இலவச மொபைல்") || query.includes("லாட்டரி")) {
        resultBox.classList.add('fake');
        resultBox.innerHTML = "❌ <strong>போலிச் செய்தி (Fake News):</strong> அரசு இதுபோன்ற திட்டத்தை அறிவிக்கவில்லை. அதிகாரப்பூர்வ தகவல்களுக்கு மட்டும் இந்த போர்ட்டலைப் பயன்படுத்தவும்!";
    } else {
        resultBox.classList.add('real');
        resultBox.innerHTML = "✅ <strong>உண்மையான செய்தி (Verified):</strong> இது தொடர்பான தகவல்கள் மற்றும் விண்ணப்பிக்கும் முறை எங்கள் தளத்தில் உள்ளது.";
    }
}

// ===================================================
// FEATURE 4: WHATSAPP ONE-CLICK SHARE LOGIC
// ===================================================
function shareOnWhatsApp(schemeName, benefit, docs) {
    const text = `🏛️ *தமிழ்நாடு அரசு நலத்திட்ட தகவல்* 🏛️\n\n` +
                 `📌 *திட்டம்:* ${schemeName}\n` +
                 `🎁 *பயன்:* ${benefit}\n` +
                 `📄 *தேவையான சான்றிதழ்கள்:* ${docs}\n\n` +
                 `📲 மேலும் விபரங்களுக்கு எங்கள் போர்ட்டலை பார்வையிடவும்: https://tn.gov.in`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encodedText}`, '_blank');
}
function calculateEligibility() {
    const age = document.getElementById('user-age').value;
    const category = document.getElementById('user-category').value;
    const resultBox = document.getElementById('calc-result');

    if (!age) {
        alert("தயவுசெய்து உங்கள் வயதை உள்ளிடவும்!");
        return;
    }

    resultBox.classList.remove('hidden');

    if (category === 'student') {
        resultBox.innerHTML = "🎉 **நீங்கள் தகுதியான திட்டங்கள்:** புதுமைப் பெண் திட்டம், நான் முதல்வன் திறன் பயிற்சி, இலவச மடிக்கணினி திட்டம்.";
    } else if (category === 'farmer') {
        resultBox.innerHTML = "🎉 **நீங்கள் தகுதியான திட்டங்கள்:** கலைஞர் நுண் பாசனத் திட்டம், பயிர் காப்பீட்டுத் திட்டம், இலவச விவசாய மின்சாரம்.";
    } else if (category === 'women') {
        resultBox.innerHTML = "🎉 **நீங்கள் தகுதியான திட்டங்கள்:** கலைஞர் மகளிர் உரிமைத் திட்டம், விடியல் பயணம் (இலவச பஸ்), மகப்பேறு நிதியுதவி திட்டம்.";
    } else {
        resultBox.innerHTML = "🎉 **நீங்கள் தகுதியான திட்டங்கள்:** முதலமைச்சரின் விரிவான மருத்துவக் காப்பீட்டுத் திட்டம், முதியோர் உதவித்தொகை.";
    }
}
function findESevai() {
    const district = document.getElementById('district-select').value;
    const resultBox = document.getElementById('esevai-result');

    if (!district) {
        resultBox.classList.add('hidden');
        return;
    }

    resultBox.classList.remove('hidden');

    const data = {
        chennai: "🏢 **மத்திய இ-சேவை மையம்:** மாவட்ட ஆட்சியர் அலுவலகம், ராஜாஜி சாலை, சென்னை - 600001.",
        madurai: "🏢 **மத்திய இ-சேவை மையம்:** தாலுக்கா அலுவலகம், காந்தி நகர், மதுரை - 625020.",
        coimbatore: "🏢 **மத்திய இ-சேவை மையம்:** தெற்கு தாலுக்கா அலுவலகம், ரேஸ்கோர்ஸ், கோவை - 641018.",
        vellore: "🏢 **மத்திய இ-சேவை மையம்:** மாவட்ட ஆட்சியர் வளாகம், சத்வாச்சாரி, வேலூர் - 632009."
    };

    resultBox.innerHTML = `${data[district]} <br><br> 📍 <a href="https://maps.google.com" target="_blank" style="color: #38bdf8; text-decoration: underline;">Google Maps-ல் வழியறிய கிளிக் செய்யவும்</a>`;
}
// SMS / WHATSAPP ALERT SYSTEM FUNCTION
function subscribeAlert() {
    const phoneInput = document.getElementById('user-phone');
    const phone = phoneInput.value.trim();
    const msgBox = document.getElementById('alert-msg');

    // 10-Digit Mobile Number Validation
    if (phone.length !== 10 || isNaN(phone)) {
        alert("தயவுசெய்து சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்!");
        return;
    }

    // Success Message Display
    msgBox.classList.remove('hidden');
    msgBox.innerHTML = `✅ **நன்றி!** ${phone} என்ற எண்ணிற்கு இனி புதிய அரசு திட்டங்களின் தகவல்கள் இலவச குறுஞ்செய்தியாக (SMS & WhatsApp) வரும்.`;

    // Clear input
    phoneInput.value = '';
}
// DOCUMENT CHECKLIST PROGRESS TRACKER (FIXED)
function updateDocProgress() {
    const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
    let checkedCount = 0;

    checkboxes.forEach(cb => {
        if (cb.checked) checkedCount++;
    });

    const statusBox = document.getElementById('doc-status');

    if (checkedCount === checkboxes.length) {
        statusBox.style.background = "rgba(16, 185, 129, 0.25)";
        statusBox.style.borderColor = "#10b981";
        statusBox.style.color = "#a7f3d0";
        statusBox.innerHTML = `🎉 <b>அனைத்து ஆவணங்களும் தயார்!</b> நீங்கள் நேரடியாக அருகில் உள்ள இ-சேவை மையத்திற்குச் சென்று விண்ணப்பிக்கலாம்.`;
    } else {
        statusBox.style.background = "rgba(245, 158, 11, 0.15)";
        statusBox.style.borderColor = "#f59e0b";
        statusBox.style.color = "#fef3c7";
        statusBox.innerHTML = `ஆவணங்கள் நிலை: <b>${checkedCount}/${checkboxes.length}</b> சரிபார்க்கப்பட்டது. மீதமுள்ள ஆவணங்களையும் தயார் செய்யவும்!`;
    }
}
// Dynamic Database for Scheme Documents
const schemeDatabase = {
    "புதுமைப் பெண்": ["ஆதார் கார்டு", "10, 12-ஆம் வகுப்பு மதிப்பெண் சான்றிதழ்", "வங்கி கணக்கு புத்தகம்", "அரசுப் பள்ளி சேர்க்கை சான்றிதழ்"],
    "மகளிர் உரிமை": ["ஆதார் கார்டு", "குடும்ப அட்டை (Ration Card)", "மின்சாரக் கட்டண ரசீது", "வங்கி கணக்கு புத்தகம்"],
    "விவசாயி": ["ஆதார் கார்டு", "பட்டா / சிட்டா நகல்", "வங்கி கணக்கு புத்தகம்", "பாஸ்போர்ட் சைஸ் போட்டோ"],
    "நான் முதல்வன்": ["ஆதார் கார்டு", "கல்லூரி அடையாள அட்டை (College ID)", "வருமான சான்றிதழ்", "பாஸ்போர்ட் சைஸ் போட்டோ"]
};

// 1. Voice Search Functionality
function startVoiceInput() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert("உங்கள் பிரவுசரில் குரல் வழித் தேடல் ஆதரிக்கப்படவில்லை!");
        return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'ta-IN';
    
    recognition.onstart = function() {
        document.getElementById('scheme-input').placeholder = "பேசுங்கள்... 🎙️";
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('scheme-input').value = transcript;
        findSchemeDocs();
    };

    recognition.start();
}

// 2. Dynamic Document Search Logic
function findSchemeDocs() {
    const query = document.getElementById('scheme-input').value.trim();
    const resultBox = document.getElementById('doc-result-box');
    const titleHeader = document.getElementById('selected-scheme-title');
    const checklistDiv = document.getElementById('dynamic-checklist');
    
    if (!query) {
        alert("தயவுசெய்து திட்டத்தின் பெயரை உள்ளிடவும்!");
        return;
    }

    let foundKey = Object.keys(schemeDatabase).find(key => query.includes(key));
    let docs = foundKey ? schemeDatabase[foundKey] : ["ஆதார் கார்டு", "குடும்ப அட்டை (Ration Card)", "வங்கி கணக்கு புத்தகம்", "வருமான சான்றிதழ்"];
    let schemeName = foundKey ? `${foundKey} திட்டம்` : query;

    resultBox.classList.remove('hidden');
    titleHeader.innerText = `📌 ${schemeName} - தேவைப்படும் ஆவணங்கள்:`;
    
    checklistDiv.innerHTML = docs.map((doc, idx) => `
        <label class="check-item">
            <input type="checkbox" onchange="checkDynamicProgress()"> 📄 ${doc}
        </label>
    `).join('');

    checkDynamicProgress();
}

// 3. Progress Tracking Logic
function checkDynamicProgress() {
    const checkboxes = document.querySelectorAll('#dynamic-checklist input[type="checkbox"]');
    let checkedCount = 0;
    checkboxes.forEach(cb => { if (cb.checked) checkedCount++; });

    const statusBox = document.getElementById('doc-status');
    if (checkedCount === checkboxes.length && checkboxes.length > 0) {
        statusBox.style.background = "rgba(16, 185, 129, 0.25)";
        statusBox.style.borderColor = "#10b981";
        statusBox.style.color = "#a7f3d0";
        statusBox.innerHTML = `🎉 <b>அனைத்து ஆவணங்களும் தயார்!</b> நீங்கள் இ-சேவை மையத்திற்குச் சென்று விண்ணப்பிக்கலாம்.`;
    } else {
        statusBox.style.background = "rgba(245, 158, 11, 0.15)";
        statusBox.style.borderColor = "#f59e0b";
        statusBox.style.color = "#fef3c7";
        statusBox.innerHTML = `ஆவணங்கள் நிலை: <b>${checkedCount}/${checkboxes.length}</b> சரிபார்க்கப்பட்டது.`;
    }
}
// 3. Top AI Mic Click Event (Voice Out Response in Selected Language)
function triggerVoiceResponse() {
    if (!lastAiResponse) {
        const currentLang = document.querySelector('.goog-te-combo')?.value || 'ta';
        lastAiResponse = aiKnowledgeBase['default'][currentLang] || aiKnowledgeBase['default']['ta'];
    }

    // வாய்ஸில் பதில் சொல்லும் ஃபங்ஷன்
    speakText(lastAiResponse);
}