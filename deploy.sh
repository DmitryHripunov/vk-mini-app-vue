#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка приложения
npm run build

# переход в каталог сборки
cd dist

# инициализация репозитория и загрузка кода на GitHab
git init
git add -A
git commit -m "deploy"

git push -f https://github.com/DmitryHripunov/vk-mini-app-vue.git main:gh-pages

cd -
