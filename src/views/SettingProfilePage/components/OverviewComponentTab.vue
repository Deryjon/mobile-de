<template>
    <div class="container-overview">
            <h1 class="title"><span class="greetings-overview">Привет!</span>, что хотите сделать сегодня?</h1>
            <div class="container-overview-cards">
                <div v-for="card in cards">
                    <div class="card">
                        <div class="card-content">
                            <div class="title_card">{{card.title}}</div>
                            <p class="card_description">{{card.text}}</p>
                            <div class="icon-pos">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                </svg>
                            </div>
                        </div>
                </div>
            </div>
        </div>

        <div class="dropgrid">
            <div class="drop-header">
                <!-- иконка, блять где иконки брать нахуй, чё за хуйня-->
                <span> Мои машины </span>
                <button class="drop-btn">Добавить автомобиль </button>
            </div>
                    <div class="drop-content">
                        <div class="drop-item">
                            <div class="drop-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                </svg>
                    </div>
                    
                    <span> Текст </span>
                </div>
            </div>

        </div>





        <div class="more-services-board"> <!-- v-for -->
            <div class="msb-container">
                <div class="msb-cards">
                    <a href="#">
                        <div class="msb-title-card"></div>
                        <p class="msb-description-card"></p>
                        <div class="msb-icon-display">
                            <!-- Иконка -->
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default { // Language specific
    data() {
        return {
            cards: [
                {title: 'Карточка 1', text: 'Текст карточки 1'}, 
                {title: 'Карточка 2', text: 'Текст карточки 2'},
                {title: 'Карточка 3', text: 'Текст карточки 3'},
                {title: 'Карточка 1', text: 'Текст карточки 1'}, 
                {title: 'Карточка 2', text: 'Текст карточки 2'},
                {title: 'Карточка 3', text: 'Текст карточки 3'}
            ]  
        }
    }
}
</script>



<style scoped>
.title, .greetings-overview{
    margin-left: 12px;
    margin-top: 8px;
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
}
.greetings-overview {
    font-weight: bold;
}
.container-overview-cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: hidden;
    grid-gap: 16px;
    padding: 16px;
    margin-left: 12px;
    grid-template-rows: minmax(0, 1fr); 
    grid-auto-rows: minmax(0, 1fr); /* И эту строку */

}   

.card{
    width: 250px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 4px solid aqua;
    height: 200px;
}
.card-content{
    padding: 16px;
}

.title_card {
    margin-bottom: 8px;
    font-weight: bold; 
}
.card_description{
    color: #666;
}

.icon{ 
    align-self: self-start;
    width: 48px;
    height: 48px;
}

/* стили для карточки */

.dropgrid {
    display: flex;
    justify-content: space-between;
    position: relative;
}

.drop-header {
    display: flex;
    align-items: center;
}

.drop-btn {
    margin-left: auto;
}

.drop-content {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
}

.drop-item {
    display: flex;
    align-items: center;
}

.drop-icon {
    padding-right: 5px;
}

.dropgrid .drop-content{
    display: block;
}

.drop-header{
    border: 1px solid #757575;
    width: 100%;
    box-sizing: border-box;
}

.drop-content{
    border-radius: 4px;
    border: 1px solid #757575;
    width: 100%;
    box-sizing: border-box;
}
</style>


