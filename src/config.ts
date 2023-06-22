export default {
    rabbitMQ: {
               // url: 'amqp://localhost',
               url: 'amqp://rabbitmq',
               // url: 'amqps://bpqiznto:bHq_DvS4yyMgR9De_0QP3ZgH7zbsOMUf@cow.rmq2.cloudamqp.com/bpqiznto',
        queues: {
            serverPersonQueue: 'queuePersons',
            clientPersonQueue: 'conectionQueueOfPersons',
            serverMovieQueue: 'queueMovies',
            clientMovieQueue: 'conectionQueueOfMovies',
            serverReviewQueue: 'queueReviews',
            clientReviewQueue: 'conectionQueueOfReviews',
        },
    },
};
