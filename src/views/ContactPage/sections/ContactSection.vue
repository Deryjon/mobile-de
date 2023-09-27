<template>



    <div class="contact-page">

        <div class="container">


            <div class="content">
                <div class="StatusDate">
                    
                </div> <!-- Status Date-->
                <div class="breadcrumbs flex items-center text-gray-500 text-sm">
                    
                </div> <!-- breadcrumbs -->
                <div class="headerLabel">
                    Контакт
                </div>
                <div class="ContentDesc">
                    Есть ли у вас дополнительные вопросы или вы предпочитаете обсудить свои опасения по телефону? Тогда вы найдете здесь всю необходимую информацию!
                </div>
                <div class="contentImg">
                    <img src="https://images.prismic.io/shacarlacca/NWQ1Yjc5ZWItYTUxOC00ZDAwLTk5NjMtMzE4MzgyZmJhZWY3__10.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C900&w=1920&ar=1600%3A900">
                </div>
                <div class="ContentDesc">
                    Здесь указаны номера наших служб поддержки клиентов и время их работы. Если вы предпочитаете написать сообщение, просто заполните контактную форму. 
                </div>
                <div class="contactff">
                    <div class="FFCARD">

                        <di class="FFICON"> 
                            <i class="fas fa-phone"></i>
                        </di>

                        <div class="FFHeader">
                            030 81097-601
                        </div>

                        <div class="FFDesc">
                            С понедельника по пятницу с 8:00 до 18:00.
                        </div>

                        <div class="FFButton">
                            <a>
                                <button type="button">
                                    <span> Обратиться </span>
                                </button>
                            </a>
                        </div>

                    </div>
                </div> 

            </div> <!-- content -->



            
        </div> <!-- /container -->




    </div> <!-- /contact-page -->






</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style scoped>

.container {
    margin: 16px;
    background: #f9fafb;
    border-radius: 8px;
    justify-content: center;
    align-content: center;
    display: flex;
}


.content {
    margin: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.headerLabel {
    font-size: 32px;
    line-height: 40px;
    font-weight: 600;
}


.ContentDesc {
    max-width: 645px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    padding-top: 16px;
    padding-bottom: 16px;
}


.contentImg {
    border-radius: 12px;
}

.contentImg img {
    max-width: 900px;
    max-height: 500px;
}
/* CARDS */



.contactff {
position: relative;
display: flex;
width: 100%;
height: 150px;
margin-top: 40px;
border: 1px solid #ccc;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.FFCARD {
position: relative;
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
}

.FFICON {
position: absolute;
width: 48px;
height: 48px;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
border-radius: 50%;
background-color: #fff;
border: 1px solid #ccc;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.FFHeader {
position: relative;
font-size: 24px;
font-weight: bold;
margin-bottom: 4px;
}

.FFDesc {
position: relative;
font-size: 16px;
margin-bottom: 16px;
}

.FFButton {
position: relative;
margin-bottom: 20px;
}

.FButton button {
position: relative;
display: inline-block;
padding: 8px 16px;
font-size: 16px;
line-height: 1.5;
text-align: center;
border: 1px solid #ccc;
border-radius: 4px;
background-color: #fff;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.FButton button:hover {
background-color: #ff8040;
}

.FButton button:active {
transform: translateY(2px);
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}


@media (max-width: 768px) {
    .FFCARD {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

    .FFICON {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    }

    .FFHeader {
    position: relative;
    font-size: 20px;
    }

    .FFDesc {
    position: relative;
    font-size: 16px;
    }

    .FFButton {
    position: relative;
    margin-bottom: 20px;
    }

    .FButton button {
    padding: 8px 16px;
    font-size: 16px;
    }
}

@media (max-width: 480px) {
    .FFCARD {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

    .FFICON {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    }

    .FFHeader {
    position: relative;
    font-size: 18px;
    }

    .FFDesc {
    position: relative;
    font-size: 16px;
    }

    .FFButton {
    position: relative;
    margin-bottom: 20px;
    }

    .FButton button {
    padding: 8px 16px;
    font-size: 16px;
    }
}

</style>