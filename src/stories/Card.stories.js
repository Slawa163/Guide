// Card.stories.js
import CardView from './views/CardView.svelte';  

export default {
  title:'Controls/Card',
  component: CardView,
  argTypes: {
    id: {
      defaultValue: 'i1',
      control: { type: 'text' },  
    },
    title: {
      defaultValue: '20 авторских маршрутов по интереснейшим местам Самарской области с описанием и всей необходимой информацией',
      control: { type: 'text' },  
    },
    subtitle: {
      defaultValue: 'Почему сюда стоит приехать: все о маршруте, интересные факты, фото крутых мест, где погулять и что посмотреть - все идеально спланировано, чтобы твоя поездка стала потрясающей!',
      control: { type: 'text' },  
    }
  }
};

export const CardStory = (args) => ({
  Component: CardView,
  props: args,
}); 
