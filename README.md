# <h1 align="center">abramson21.github.sprint_13</h4>
***Задание:*** Настроить линтер, подключиться к Mongo, создайте схемы и модели, создать контроллеры и роуты для пользователей, создать тестового пользователя, создать контроллеры и роуты для карточек.

1. Поля схемы пользователя.
**name** — имя пользователя, строка от 2 до 30 символов, обязательное поле;
**about** — информация о пользователе, строка от 2 до 30 символов, обязательное поле;
**avatar** — ссылка на аватарку, строка, обязательно поле.
2. Поля схемы карточки:
**name** — имя карточки, строка от 2 до 30 символов, обязательное поле;
**link** — ссылка на картинку, строка, обязательно поле;
**owner** — ссылка на модель автора карточки, тип ObjectId, обязательное поле;
**likes** — список лайкнувших пост пользователей, массив ObjectId, по умолчанию — пустой массив (поле default).
**createdA**t — дата создания, тип Date, значение по умолчанию Date.now.
