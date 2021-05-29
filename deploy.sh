#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка приложения
npm run build

# переход в каталог сборки
cd dist

# инициализация репозитория и загрузка кода на GitHab
git init
git checkout -b main
git add -A
git commit -m "deploy"

git push -f https://github.com/DmitryHripunov/test-vk-mini-app-vue.git main:gh-pages

cd -
# ссылка на приложение https://dmitryhripunov.github.io/test-vk-mini-app-vue/