'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

interface Player {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
}

interface Bowler {
  name: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
}

interface Team {
  name: string;
  score: number;
  wickets: number;
  overs: number;
  balls: number;
  batsmen: Player[];
  bowlers: Bowler[];
}

interface Match {
  id: number;
  team1: Team;
  team2: Team;
  status: string;
  venue: string;
  matchType: string;
  currentInnings: number;
  result?: string;
}

export default function Home() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);

  useEffect(() => {
    // Initialize sample matches
    const sampleMatches: Match[] = [
      {
        id: 1,
        team1: {
          name: "India",
          score: 326,
          wickets: 5,
          overs: 50,
          balls: 0,
          batsmen: [
            { name: "V Kohli", runs: 112, balls: 95, fours: 10, sixes: 2, strikeRate: 117.89 },
            { name: "R Sharma", runs: 89, balls: 73, fours: 8, sixes: 4, strikeRate: 121.92 },
            { name: "KL Rahul", runs: 45, balls: 38, fours: 5, sixes: 1, strikeRate: 118.42 },
          ],
          bowlers: [
            { name: "J Bumrah", overs: 10, maidens: 2, runs: 42, wickets: 3, economy: 4.2 },
            { name: "M Shami", overs: 10, maidens: 1, runs: 51, wickets: 2, economy: 5.1 },
          ]
        },
        team2: {
          name: "Australia",
          score: 298,
          wickets: 9,
          overs: 48,
          balls: 3,
          batsmen: [
            { name: "S Smith", runs: 76, balls: 89, fours: 7, sixes: 1, strikeRate: 85.39 },
            { name: "D Warner", runs: 68, balls: 62, fours: 6, sixes: 3, strikeRate: 109.68 },
            { name: "M Marsh", runs: 52, balls: 47, fours: 4, sixes: 2, strikeRate: 110.64 },
          ],
          bowlers: [
            { name: "P Cummins", overs: 10, maidens: 0, runs: 58, wickets: 2, economy: 5.8 },
            { name: "M Starc", overs: 10, maidens: 1, runs: 63, wickets: 1, economy: 6.3 },
          ]
        },
        status: "India won by 28 runs",
        venue: "Melbourne Cricket Ground",
        matchType: "ODI",
        currentInnings: 2,
        result: "India won by 28 runs"
      },
      {
        id: 2,
        team1: {
          name: "England",
          score: 187,
          wickets: 6,
          overs: 20,
          balls: 0,
          batsmen: [
            { name: "J Buttler", runs: 73, balls: 42, fours: 6, sixes: 5, strikeRate: 173.81 },
            { name: "J Bairstow", runs: 45, balls: 28, fours: 5, sixes: 2, strikeRate: 160.71 },
            { name: "M Ali", runs: 32, balls: 19, fours: 3, sixes: 2, strikeRate: 168.42 },
          ],
          bowlers: [
            { name: "J Archer", overs: 4, maidens: 0, runs: 28, wickets: 2, economy: 7.0 },
            { name: "M Wood", overs: 4, maidens: 0, runs: 35, wickets: 1, economy: 8.75 },
          ]
        },
        team2: {
          name: "Pakistan",
          score: 158,
          wickets: 10,
          overs: 19,
          balls: 2,
          batsmen: [
            { name: "B Azam", runs: 62, balls: 48, fours: 5, sixes: 2, strikeRate: 129.17 },
            { name: "M Rizwan", runs: 38, balls: 29, fours: 4, sixes: 1, strikeRate: 131.03 },
            { name: "S Khan", runs: 24, balls: 16, fours: 2, sixes: 1, strikeRate: 150.0 },
          ],
          bowlers: [
            { name: "S Afridi", overs: 4, maidens: 0, runs: 32, wickets: 2, economy: 8.0 },
            { name: "H Rauf", overs: 4, maidens: 0, runs: 41, wickets: 1, economy: 10.25 },
          ]
        },
        status: "England won by 29 runs",
        venue: "Lord's Cricket Ground",
        matchType: "T20",
        currentInnings: 2,
        result: "England won by 29 runs"
      },
      {
        id: 3,
        team1: {
          name: "South Africa",
          score: 412,
          wickets: 8,
          overs: 110,
          balls: 0,
          batsmen: [
            { name: "Q de Kock", runs: 141, balls: 168, fours: 15, sixes: 3, strikeRate: 83.93 },
            { name: "T Bavuma", runs: 87, balls: 134, fours: 9, sixes: 0, strikeRate: 64.93 },
            { name: "R van der Dussen", runs: 78, balls: 112, fours: 7, sixes: 2, strikeRate: 69.64 },
          ],
          bowlers: [
            { name: "K Rabada", overs: 18, maidens: 3, runs: 62, wickets: 4, economy: 3.44 },
            { name: "A Nortje", overs: 16, maidens: 2, runs: 58, wickets: 2, economy: 3.63 },
          ]
        },
        team2: {
          name: "New Zealand",
          score: 156,
          wickets: 4,
          overs: 52,
          balls: 0,
          batsmen: [
            { name: "K Williamson", runs: 67, balls: 103, fours: 6, sixes: 1, strikeRate: 65.05 },
            { name: "T Latham", runs: 42, balls: 78, fours: 4, sixes: 0, strikeRate: 53.85 },
            { name: "D Mitchell", runs: 28, balls: 45, fours: 3, sixes: 0, strikeRate: 62.22 },
          ],
          bowlers: [
            { name: "T Southee", overs: 24, maidens: 5, runs: 78, wickets: 3, economy: 3.25 },
            { name: "T Boult", overs: 22, maidens: 4, runs: 71, wickets: 2, economy: 3.23 },
          ]
        },
        status: "In Progress - Day 2",
        venue: "SuperSport Park, Centurion",
        matchType: "Test",
        currentInnings: 2
      }
    ];

    setMatches(sampleMatches);
    setSelectedMatch(0);
  }, []);

  const currentMatch = selectedMatch !== null ? matches[selectedMatch] : null;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>🏏 Cricket Live Scores</h1>
          <p className={styles.subtitle}>Real-time updates from around the world</p>
        </header>

        <div className={styles.matchSelector}>
          {matches.map((match, index) => (
            <button
              key={match.id}
              className={`${styles.matchTab} ${selectedMatch === index ? styles.active : ''}`}
              onClick={() => setSelectedMatch(index)}
            >
              <div className={styles.tabContent}>
                <span className={styles.tabTeams}>{match.team1.name} vs {match.team2.name}</span>
                <span className={styles.tabType}>{match.matchType}</span>
              </div>
            </button>
          ))}
        </div>

        {currentMatch && (
          <div className={styles.scoreboardContainer}>
            <div className={styles.matchInfo}>
              <div className={styles.matchHeader}>
                <h2 className={styles.matchTitle}>
                  {currentMatch.team1.name} vs {currentMatch.team2.name}
                </h2>
                <span className={styles.matchType}>{currentMatch.matchType}</span>
              </div>
              <p className={styles.venue}>📍 {currentMatch.venue}</p>
              <div className={`${styles.status} ${currentMatch.result ? styles.finished : styles.live}`}>
                {currentMatch.status}
              </div>
            </div>

            <div className={styles.teamsContainer}>
              {/* Team 1 */}
              <div className={styles.teamCard}>
                <div className={styles.teamHeader}>
                  <h3 className={styles.teamName}>{currentMatch.team1.name}</h3>
                  <div className={styles.teamScore}>
                    <span className={styles.runs}>{currentMatch.team1.score}</span>
                    <span className={styles.wickets}>/{currentMatch.team1.wickets}</span>
                    <span className={styles.overs}>
                      ({currentMatch.team1.overs}{currentMatch.team1.balls > 0 ? `.${currentMatch.team1.balls}` : ''} ov)
                    </span>
                  </div>
                </div>

                <div className={styles.batsmenSection}>
                  <h4 className={styles.sectionTitle}>Batting</h4>
                  <table className={styles.statsTable}>
                    <thead>
                      <tr>
                        <th>Batsman</th>
                        <th>R</th>
                        <th>B</th>
                        <th>4s</th>
                        <th>6s</th>
                        <th>SR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentMatch.team1.batsmen.map((batsman, idx) => (
                        <tr key={idx}>
                          <td className={styles.playerName}>{batsman.name}</td>
                          <td>{batsman.runs}</td>
                          <td>{batsman.balls}</td>
                          <td>{batsman.fours}</td>
                          <td>{batsman.sixes}</td>
                          <td>{batsman.strikeRate.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className={styles.bowlersSection}>
                  <h4 className={styles.sectionTitle}>Bowling</h4>
                  <table className={styles.statsTable}>
                    <thead>
                      <tr>
                        <th>Bowler</th>
                        <th>O</th>
                        <th>M</th>
                        <th>R</th>
                        <th>W</th>
                        <th>Eco</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentMatch.team1.bowlers.map((bowler, idx) => (
                        <tr key={idx}>
                          <td className={styles.playerName}>{bowler.name}</td>
                          <td>{bowler.overs}</td>
                          <td>{bowler.maidens}</td>
                          <td>{bowler.runs}</td>
                          <td>{bowler.wickets}</td>
                          <td>{bowler.economy.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Team 2 */}
              <div className={styles.teamCard}>
                <div className={styles.teamHeader}>
                  <h3 className={styles.teamName}>{currentMatch.team2.name}</h3>
                  <div className={styles.teamScore}>
                    <span className={styles.runs}>{currentMatch.team2.score}</span>
                    <span className={styles.wickets}>/{currentMatch.team2.wickets}</span>
                    <span className={styles.overs}>
                      ({currentMatch.team2.overs}{currentMatch.team2.balls > 0 ? `.${currentMatch.team2.balls}` : ''} ov)
                    </span>
                  </div>
                </div>

                <div className={styles.batsmenSection}>
                  <h4 className={styles.sectionTitle}>Batting</h4>
                  <table className={styles.statsTable}>
                    <thead>
                      <tr>
                        <th>Batsman</th>
                        <th>R</th>
                        <th>B</th>
                        <th>4s</th>
                        <th>6s</th>
                        <th>SR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentMatch.team2.batsmen.map((batsman, idx) => (
                        <tr key={idx}>
                          <td className={styles.playerName}>{batsman.name}</td>
                          <td>{batsman.runs}</td>
                          <td>{batsman.balls}</td>
                          <td>{batsman.fours}</td>
                          <td>{batsman.sixes}</td>
                          <td>{batsman.strikeRate.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className={styles.bowlersSection}>
                  <h4 className={styles.sectionTitle}>Bowling</h4>
                  <table className={styles.statsTable}>
                    <thead>
                      <tr>
                        <th>Bowler</th>
                        <th>O</th>
                        <th>M</th>
                        <th>R</th>
                        <th>W</th>
                        <th>Eco</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentMatch.team2.bowlers.map((bowler, idx) => (
                        <tr key={idx}>
                          <td className={styles.playerName}>{bowler.name}</td>
                          <td>{bowler.overs}</td>
                          <td>{bowler.maidens}</td>
                          <td>{bowler.runs}</td>
                          <td>{bowler.wickets}</td>
                          <td>{bowler.economy.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
