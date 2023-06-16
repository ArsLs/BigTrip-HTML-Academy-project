import {createElement, render} from '../render.js';
import TimeFiltersView from '../view/time-filters-view';
import TripEventsSortbarView from '../view/trip-events-sortbar-view';
import TripEventsListView from '../view/trip-events-list-view';
import TripEventView from '../view/trip-event-view';
import EventEditView from '../view/event-edit-form/event-edit-view';
import {createRandomTripEvent} from '../temp-data-factory';
export default class AbstractPresenter {

  init(){
    const tripEventsSortBar = new TripEventsSortbarView();
    const tripEventsList = new TripEventsListView();
    // Фильтры
    const filtersParentElement = document.querySelector('.trip-controls__filters');
    render(new TimeFiltersView(), filtersParentElement);

    const eventListParentElement = document.querySelector('.trip-events');

    //Сортировка
    render(tripEventsSortBar, eventListParentElement);
    // Список
    render(tripEventsList, eventListParentElement);

    const randomTripEvent = createRandomTripEvent();
    tripEventsList.add(new EventEditView(createRandomTripEvent()));

    //3хТочка Маршрута
    for (let i = 0; i < 3; i++) {
      tripEventsList.add(new TripEventView(createRandomTripEvent()));
    }

  }
}
