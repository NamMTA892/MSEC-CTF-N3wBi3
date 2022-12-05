FROM python:3.8-slim

RUN useradd -m ctf

WORKDIR /app

COPY src/ .
COPY flag_e489ed8f638 /

ENV PORT 1337
RUN apt update -y
RUN apt install curl -y
RUN apt install ncat -y
RUN pip3 install --upgrade --no-cache-dir -r requirements.txt

RUN chown -R root:ctf /app && \
    chmod 750 /app /app/app.py

USER ctf

CMD ["/usr/local/bin/python", "/app/app.py"]

EXPOSE 1337