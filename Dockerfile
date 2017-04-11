FROM nginx
ADD default.conf /etc/nginx/conf.d/default.conf
ADD dist /usr/share/nginx/html
ADD apps /usr/share/nginx/html
