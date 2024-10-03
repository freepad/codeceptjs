Feature: Авторизация BDD

  Scenario: Успешная авторизация
    Given Пользователь открывает страницу авторизации
    When Пользователь вводит правильные учетные данные
    Then Пользователь успешно авторизован и перенаправлен на главную страницу

  Scenario Outline: Успешная авторизация параметризованная
    Given Пользователь открывает страницу авторизации
    When Пользователь вводит логин <username> и пароль <password>
    Then Пользователь успешно авторизован и перенаправлен на главную страницу
    Examples:
      | username               | password               |
      | root@mail.net | E5dPkCf7bPTnfn6q |

  Scenario: Невозможно авторизоваться без пароля
    Given Пользователь открывает страницу авторизации
    When Пользователь не вводит пароль
    Then Открывается страница с ошибкой авторизации
