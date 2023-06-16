import AbstractView from '../abstract-view';
import EventBioView from './event-bio-view';
import EventDetailsView from './event-details-view';

const createEditFormTemplate = () => {

};

export default class EventEditView extends AbstractView{
  tripEvent;
  bioView = new EventBioView();
  detailsView = new EventDetailsView();
  getOffers(){

  }
  setOffers(){

  }
  getDestination(){

  }
  setDestination(){

  }

  get template() {
    return `<form className="event event--edit" action="#" method="post">
  ${this.bioView.getTemplate(this.tripEvent)}
  ${this.detailsView.getTemplate(this.tripEvent)}
</form>`;
  }

  constructor(tripEvent) {
    super();
    this.tripEvent = tripEvent;
  }
}
