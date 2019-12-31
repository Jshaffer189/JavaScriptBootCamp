// Starting Object of Golden State Warrior Games
const warriorsGames = [
	{
		awayTeam: {
			team: 'Golden State',
			points: 119,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 106,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 105,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 127,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 126,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 85,
			isWinner: false
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 92,
			isWinner: false
		},
		awayTeam: {
			team: 'Houston',
			points: 95,
			isWinner: true
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 94,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 98,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 115,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 86,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 101,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 92,
			isWinner: false
		}
	}
];

const makeChart = (games, targetTeam) => {
	// - chart builder -
	const ulParent = document.createElement('ul');
	// building each teams game rows
	for (let game of games) {
		// The final return object is the <li> tag
		const gameLi = document.createElement('li');
		gameLi.innerHTML = getScoreLine(game);
		// returns the winning team
		gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
		// append child row/list to unOrdered List
		ulParent.appendChild(gameLi);
	}
	return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
	const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
	return target.isWinner;

	// gameLi.classList.add(warriors.isWinner ? 'win' : 'loss');
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
	const { team: hTeam, points: hPoints } = homeTeam;
	const { team: aTeam, points: aPoints } = awayTeam;
	const teamNames = `${aTeam} @ ${hTeam}`;
	let scoreLine;
	if (aPoints > hPoints) {
		scoreLine = `<b>${aPoints}</b>-${hPoints}`;
	} else {
		scoreLine = `${aPoints}-<b>${hPoints}</b>`;
	}
	// returns teams and points without markup tags
	return `${teamNames} ${scoreLine}`;
};

const gsSection = document.querySelector('#gs');
const hrSection = document.querySelector('#hr');
// Reusable depending on 2nd parameter for team name
const gsChart = makeChart(warriorsGames, 'Golden State');
gsSection.appendChild(gsChart);

const hrChart = makeChart(warriorsGames, 'Houston');
hrSection.appendChild(hrChart);
