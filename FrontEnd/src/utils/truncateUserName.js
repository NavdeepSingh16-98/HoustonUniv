// import truncate from 'lodash/truncate';

export default function truncateUserName(string){
  return string
    .replace('ig:','')
    .replace('@gmail.com','')
    .replace('@hotmail.com','')
    // .replace('@','');
  // return truncate(string,{length:20,separator:'@',omission:''});
}