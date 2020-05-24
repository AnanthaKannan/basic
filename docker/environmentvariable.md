FROM nginx:alpine

ENV webpath /usr/share/nginx/html/test.html

RUN \
    echo "1" >> $webpath && \
    echo "2" >> $webpath && \
    echo "3" >> $webpath && \