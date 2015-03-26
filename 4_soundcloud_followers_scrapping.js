// Scrap every followers for a specific SoundCloud Profile
// Configure your artist page
// To learn more about iMacros: http://bit.ly/1CImBoM


// 1. Variables Initialization


var macro, artist, i, j;

macro = '';

proxy = '';

artist = 'https://soundcloud.com/tiesto';


// 2. Macro Initialization


macro += 'CODE:' + '\n';

macro += 'SET !TIMEOUT_STEP 2' + '\n';

macro += 'SET !TIMEOUT_TAG 2' + '\n';

macro += 'SET !TIMEOUT_PAGE 45' + '\n';

macro += 'SET !ERRORIGNORE YES' + '\n';

macro += 'SET !EXTRACT_TEST_POPUP NO' + '\n';


// 3. Go to Artist Page


macro += 'TAB T=1' + '\n';

macro += 'TAB CLOSEALLOTHERS' + '\n';

macro += 'URL GOTO=' + artist + '\n';


// 4. Scrap Every Followers


macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>SPAN>A" BUTTON=0' + '\n';

macro += 'WAIT SECONDS=10' + '\n';

var pos = 0;

for (i=0; i < 10; i++) {

	for (j=0; j < 25; j++) {
		macro += 'TAG POS=' + pos + ' TYPE=A ATTR=CLASS:userAvatarBadge__usernameLink EXTRACT=HREF' + '\n';
		macro += 'SAVEAS TYPE=EXTRACT FOLDER=* FILE=soundcloud.csv' + '\n';

		pos++;
	}

	macro += 'URL GOTO=javascript:window.scrollBy(0,1000000)' + '\n';
	macro += 'WAIT SECONDS=5' + '\n';
}


// 5. Run The Macro


iimDisplay("iMacro is now running. Let's hack growth.");

iimPlay(macro);