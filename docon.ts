
const resetLeaderboard = async () => {
  const response = await contract.leaderboard_8192.reset_leaderboard();
  console.log(response);
};

