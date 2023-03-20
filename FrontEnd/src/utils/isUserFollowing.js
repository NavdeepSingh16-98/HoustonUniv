export default function isUserFollowing(followingList,userId){
  if(!followingList) return false;

  return !!followingList.find((u) => u._id === userId)
}