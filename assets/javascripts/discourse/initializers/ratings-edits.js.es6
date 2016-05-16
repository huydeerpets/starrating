import Topic from 'discourse/models/topic';
import TopicController from 'discourse/controllers/topic';
import TopicRoute from 'discourse/routes/topic';
import ComposerController from 'discourse/controllers/composer';
import ComposerView from 'discourse/views/composer';
import Composer from 'discourse/models/composer';
import Post from 'discourse/models/post';
import registerUnbound from 'discourse/helpers/register-unbound';
import renderUnboundRating from 'discourse/plugins/discourse-ratings/lib/render-rating';
import { popupAjaxError } from 'discourse/lib/ajax-error';
import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'ratings-edits',
  initialize(){

    withPluginApi('0.1', api => {
      api.includePostAttributes('rating')
      api.decorateWidget('poster-name:after', function(helper) {
        var rating = helper.attrs.rating,
        //    showRating = helper.getModel().topic.show_ratings;
        //if (showRating && rating) {
          var html = new Handlebars.SafeString(renderUnboundRating(rating))
          return helper.rawHtml(`${html}`)
        //}
      })
    });

    

  }
}
