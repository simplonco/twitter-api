/**
* Se créer un compte twitter ou utiliser un compte existant.
* Allez dans la rubrique pour développeurs et créez une app.
* Demandez un acces token.
* Récupérez les informations suivantes sur votre app :
* TWITTER_API_KEY
* TWITTER_SECRET_KEY
* TWITTER_ACCESS_TOKEN
* TWITTER_ACCESS_TOKEN_SECRET
* Et stockez-les dans des vars.
*/

var cb = new Codebird;

cb.setConsumerKey( TWITTER_API_KEY, TWITTER_SECRET_KEY );
cb.setToken( TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_TOKEN_SECRET );

var API_method = "statuses_update";

var params = {
  status : "Je peux créer des tweets à partir de mon script !"
}

cb.__call(
  API_method,
  params,
  function (data) {
    console.log("data");
    console.log(data);
});