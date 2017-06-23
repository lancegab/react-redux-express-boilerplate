import {combineReducers} from 'redux';

const allReducers = combineReducers({
  categories: CategoriesReducer,
  topics: TopicsReducer,
  messages: MessagesReducer,

  activeCategory: ActiveCategoryReducer,
  activeTopic: ActiveTopicReducer,
  activeMessage: ActiveMessageReducer,

  headMessage: HeadMessageReducer
});

export default allReducers;
