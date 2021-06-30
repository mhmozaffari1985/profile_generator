const readline = require("readline");

const survey = function () {
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = {
    name: "",
    activity: "",
    activityMusic: "",
    favoriteMeal: "",
    favoriteDish: "",
    favoriteSport: "",
    superPower: "",
  };

  r1.question(
    "What is your name? Nicknames are also acceptable :) ",
    (ansName) => {
      r1.question("What is an activity you like doing? ", (ansActivity) => {
        r1.question(
          "What do you listen to while doing that? ",
          (ansActivityMusic) => {
            r1.question(
              "Which meal is your favourite (eg: dinner, brunch, etc.) ",
              (ansFavoriteMeal) => {
                r1.question(
                  "What is your favourite thing to eat for that meal? ",
                  (ansFavoriteDish) => {
                    r1.question(
                      "Which sport is your absolute favourite? ",
                      (ansFavoriteSport) => {
                        r1.question(
                          "What is your superpower? In a few words, tell us what you are amazing at! ",
                          (ansSuperPower) => {
                            console.log(
                              `Thank you for participating in this survey. You are ${ansName} and you love to listen to ${ansActivityMusic} while you are busy with ${ansActivity}. Your favorite sport, meal of the day and dish are ${ansFavoriteSport}, ${ansFavoriteMeal} and ${ansFavoriteDish} respectively. You are also great at ${ansSuperPower}.`
                            );
                            r1.close();
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    }
  );
};

survey();
