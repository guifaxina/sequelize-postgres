FROM postgres:alpine

EXPOSE 5432

ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_USERNAME=postgres