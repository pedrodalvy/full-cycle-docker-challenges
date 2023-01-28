# Stage 1
FROM golang:alpine as builder

WORKDIR /app
COPY main.go .

RUN go build main.go

# Stage 2
FROM scratch

WORKDIR /app
COPY --from=buiLder /app/main main

CMD ["./main"]
