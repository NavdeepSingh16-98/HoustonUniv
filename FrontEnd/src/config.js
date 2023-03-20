
/* OAUTH INSTAGRAM AND FACEBOOK */
const RESPONSE_TYPE='token';

const INSTAGRAM_ID='af80e73119464a5cb813ef2c816d66f6';
//const INSTAGRAM_REDIRECT_URL='https://topvote-web-dot-model-cirrus-190211.appspot.com/oauth/instagram';
const INSTAGRAM_REDIRECT_URL='https://www.gettopvote.com/oauth/instagram';
const INSTAGRAM_SCOPE='basic';

export const INSTAGRAM_AUTH_URL=`https://api.instagram.com/oauth/authorize/?client_id=${INSTAGRAM_ID}&redirect_uri=${INSTAGRAM_REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=${INSTAGRAM_SCOPE}`;

const FACEBOOK_ID='355315134917878';
//const FACEBOOK_REDIRECT_URL='https://topvote-web-dot-model-cirrus-190211.appspot.com/oauth/facebook';
const FACEBOOK_REDIRECT_URL='https://www.gettopvote.com/oauth/facebook';
const FACEBOOK_SCOPE='email,user_age_range,user_gender';

export const FACEBOOK_AUTH_URL=`https://www.facebook.com/v5.0/dialog/oauth?client_id=${FACEBOOK_ID}&redirect_uri=${FACEBOOK_REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=${FACEBOOK_SCOPE}`;
