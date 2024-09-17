import bridge from '@vkontakte/vk-bridge';

export const StoryRedactor = () => {
  fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(data => window.img = data?.message)
  return (bridge.send('VKWebAppShowStoryBox', {
      background_type: 'image',
      url: window.img,
      })
      .then((data) => {
        if (data.code_data) {
          // Редактор историй открыт
          console.log(data);
        }})
      .catch((error) => {
        // Ошибка
        console.log(error);
      }
    )
  )
};

