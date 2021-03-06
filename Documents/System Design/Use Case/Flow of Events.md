# Поток событий

# Содержание
1 [Актёры](#actors)  
2 [Варианты использования](#use_cases)  
2.1 [Войти в приложение](#enter_in_the_app)  
2.2 [Авторизоваться](#sign_in)  
2.3 [Просмотреть список задач](#view_tasks_list)  
2.4 [Просмотреть список важных задач](#view_important_tasks_list)  
2.5 [Загрузить данные](#download_data)  
2.6 [Изменить список задач](#change_tasks_list)  
2.7 [Добавить задачи](#add_tasks)  
2.8 [Редактировать задачи](#edit_tasks)  
2.9 [Удалить задачи](#delete_tasks)  
2.10 [Отметить важные задачи](#mark_as_important)  
2.11 [Обновить данные](#update_data)  
2.12 [Выйти из учётной записи](#sign_out)

<a name="actors"/>

# 1 Актёры

| Актёр | Описание |
|:------|:---------|
| Пользователь | Человек, использующий приложение. |
| Анонимный пользователь | Пользователь, который не авторизовался в приложении. |
| Авторизованный пользователь | Пользователь, который авторизовался в приложении. |
| Хранилище | База данных, где хранится и откуда загружается информация. |

<a name="use_cases"/>

# 2 Варианты использования

<a name="enter_in_the_app"/>

## 2.1 Войти в приложение

**Описание.** Вариант использования "Войти в приложение" позволяет пользователю войти в приложение.  
**Основной поток.**
1. Вариант использования начинается, когда пользователь запускает приложение; 
2. Выполняется вариант использования, связанный со статусом пользователя;
3. Вариант использования завершается.

<a name="sign_in"/>

## 2.2 Авторизоваться

**Описание.** Вариант использования "Авторизоваться" позволяет пользователю войти в учётную запись.  
**Предусловия.** Пользователь первый раз заходит в приложение или ранее вышел из учётной записи.  
**Основной поток.**
1. Приложение отображает способы входа в учётную запись;
2. Пользователь выбирает один из способов входа;
3. Приложение проверяет наличие на устройстве связанных со способом входа аккаунтов пользователя. Если таковые имеются, выполняется альтернативный поток А1, в противном случае, выполняется альтернативный поток А2.

**Альтернативный поток А1.**
1. Приложение отображает список аккаунтов, связанных с выбранным способом входа;
2. Пользователь выбирает аккаунт;
3. Вариант использования завершается.  
**Постусловия.** Выполняется вариант использования "Просмотреть список задач".

**Альтернативный поток А2.**
1. Приложение отображает предложение добавить аккаунт;
2. Пользователь принимает предложение;
3. Приложение ожидает завершения процесса добавления пользователем нового аккаунта;
4. Переход к п.1 альтернативного потока А1.  
**Дополнительная информация.** Пользователь имеет возможность отменить процесс добавления нового аккаунта. В случае отмены выполняется переход к п.1 основного потока.

<a name="view_tasks_list"/>

## 2.3 Просмотреть список задач

**Описание.** Вариант использования "Просмотреть список задач" отображает созданные пользователем задачи в области главного окна приложения.  
**Предусловия.** Пользователь авторизован в приложении. Был инициирован вариант использования "Загрузить данные".  
**Основной поток.**
1. Вариант использования начинается после авторизации пользователя или после входа в приложение, если пользователь уже был авторизован. Также после выбора пользователем "Просмотреть список всех задач", если до этого был инициирован вариант использования [просмотреть список важных задач](#view_important_tasks_list);
2. Приложение отображает главное окно приложения, в котором  показаны задачи пользователя. Также приложение предлагает пользователю выбрать одно из действий: [просмотреть список важных задач](#view_important_tasks_list), [изменить список задач](#change_tasks_list), [выйти из учётной записи](#sign_out). Если пользователь выбирает один из вариантов, выполняется соответствующий вариант использования;
3. Вариант использования завершается.

<a name="view_important_tasks_list"/>

## 2.4 Просмотреть список важных задач

**Описание.** Вариант использования "Просмотреть список важных задач" отображает задачи, ранее помеченные пользователем как важные, в области главного окна приложения.  
**Предусловия.** Авторизованный пользователь выбрал "Просмотреть список важных задач".  
**Основной поток.**

1. Вариант использования начинается после того, как пользователь выбрал пункт меню "Просмотреть список важных задач" на верзней панели приложения;
2. Приложение отображает главное окно приложения, в котором  показаны важные задачи пользователя. Также приложение предлагает пользователю выбрать одно из действий: [просмотреть список задач](#view_tasks_list) (всех), [изменить список задач](#change_tasks_list), [выйти из учётной записи](#sign_out). Если пользователь выбирает один из вариантов, выполняется соответствующий вариант использования;
3. Вариант использования завершается.

<a name="download_data"/>

## 2.5 Загрузить данные

**Описание.** Вариант использования "Загрузить данные" загружает информацию из хранилища.  
**Предусловия.** Пользователь авторизован в приложении.  
**Основной поток.**

1. Приложение загружает из хранилища данные, связанные с конкретным пользователем. Если отсутствует подключение к Интернету, выполняется поток ошибки Е1;
2. Вариант использования завершается.

**Поток ошибки Е1.**

1. Приложение сообщает пользователю об отсутствии подключения к Интернету и предлагает список доступных действий: повторить попытку, отменить загрузку;
2. Если пользователь запрашивает повторить попытку, возврат к п.1 основного потока;
3. Вариант использования завершается.

<a name="change_tasks_list"/>

## 2.6 Изменить список задач

**Описание.** Вариант использования "Изменить список задач" позволяет пользователю изменять задачи.  
**Предусловия.** Пользователь авторизован в приложении.  
**Основной поток.**

1. Приложение отображает возможные способы изменения задач: [добавить задачи](#add_tasks), [редактировать задачи](#edit_tasks), [удалить задачи](#delete_tasks), [отметить важные задачи](#mark_as_important);
2. Пользователь выбирает один из способов изменения задач;
3. Выполняется вариант использования, связанный с выбранным способом изменения задач;
4. Вариант использования завершается.

<a name="add_tasks"/>

## 2.7 Добавить задачи

**Описание.** Вариант использования "Добавить задачи" позволяет пользователю добавить новые задачи.  
**Предусловия.** Авторизованный пользователь выбрал "Добавить задачу".  
**Основной поток.**

1. Пользователь нажимает на кнопку "+" (добавить);
2. Приложение отображает форму добавления новой задачи;
3. Пользователь вводит текст новой задачи;
4. Пользователь подтверждает действие;
5. Приложение добавляет задачу в список задач;
6. Приложение скрывает форму добавления;
7. Вариант использования завершается.

**Постусловия.** Выполняется вариант использования "Обновить данные".

<a name="edit_tasks"/>

## 2.8 Редактировать задачи

**Описание.** Вариант использования "Редактировать задачи" позволяет пользователю изменить уже существующие задачи.  
**Предусловия.** Авторизованный пользователь выбрал "Редактировать задачу".  
**Основной поток.**

1. Пользователь выбирает пункт "Редактировать" выпадающего списка задачи;
2. Приложение отображает форму редактирования задачи;
3. Пользователь редактирует текст задачи;
4. Пользователь подтверждает действие;
5. Приложение заменяет старую задачу на отредактированную;
6. Приложение скрывает форму редактирования;
7. Вариант использования завершается.

**Постусловия.** Выполняется вариант использования "Обновить данные".

<a name="delete_tasks"/>

## 2.9 Удалить задачи

**Описание.** Вариант использования "Удалить задачи" позволяет пользователю удалить добавленные ранее задачи.  
**Предусловия.** Авторизованный пользователь выбрал "Удалить задачу".  
**Основной поток.**

1. Пользователь выбирает пункт "Удалить" выпадающего списка задачи;
2. Приложение удаляет задачу из списка задач;
3. Вариант использования завершается.

**Постусловия.** Выполняется вариант использования "Обновить данные".

<a name="mark_as_important"/>

## 2.10 Отметить важные задачи

**Описание.** Вариант использования "Удалить задачи" позволяет пользователю изменить статус добавленных ранее задач.  
**Предусловия.** Авторизованный пользователь выбрал "Отметить задачу как важную".  
**Основной поток.**

1. Пользователь выбирает пункт "Отметить как важную" выпадающего списка задачи;
2. Приложение изменяет статус задачи;
3. Вариант использования завершается.

**Постусловия.** Выполняется вариант использования "Обновить данные".

<a name="update_data"/>

## 2.11 Обновить данные

**Описание.** Вариант использования "Обновить данные" загружает информацию в хранилище.  
**Предусловия.** Пользователь авторизован в приложении. Был инициирован вариант использования "Изменить список задач".  
**Основной поток.**

1. Приложение загружает в хранилище изменённые данные. Если отсутствует подключение к Интернету, выполняется поток ошибки Е2;
2. Вариант использования завершается.

**Поток ошибки Е2.**

1. Приложение информирует пользователя об отсутствии подключения к Интернету и о том, что данные не будут сохранены;
2. Приложение предлагает: повторить попытку.
3. Если пользователь запрашивает повторить попытку, возврат к п.1 основного потока;

<a name="sign_out"/>

## 2.12 Выйти из учётной записи

**Описание.** Вариант использования "Выйти из учётной записи" позволяет авторизованному пользователю выйти из учётной записи.  
**Предусловия.** Пользователь авторизовался в приложении.  
**Основной поток.**

1. Вариант использования начинается, когда зарегистрированный пользователь выбирает пункт меню "Выйти из учётной записи" на верхней панели приложения;
2. Приложение скрывает главное окно приложения;
3. Вариант использования завершается.

**Постусловия.** Выполняется вариант использования "Авторизоваться".