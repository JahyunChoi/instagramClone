import { rest } from 'msw';
import { v4 as uuidv4 } from 'uuid';

const peeds = [
  {
    id: 'a',
    userName: 'kim',
    image: {
      id: 1,
      originFileName: 'helping-hand.png',
      fileName: 'image144254176.helping-hand.png',
      filePath: 'images\\2023\\8\\14',
    },
    content: '댓글1',
    comments: [
      {
        id: 'b',
        userName: 'jojo',
        content: '댓글 테스트입니다.댓글 테스트입니다. 댓글 테스트입니다. 댓글 테스트입니다. 댓글 테스트입니다.   댓글 테스트입니다. 댓글 테스트입니다. ',
        replies: [
          {
            id: 'c',
            userName: 'hehe',
            content: '대댓글 테스트 중입니다.',
          },
          {
            id: 'c',
            userName: 'hehe',
            content: '대댓글 테스트 중입니다.',
          },
        ],
      },
      {
        id: 'd',
        userName: 'hoho',
        content: '댓글 테스트입니다.',
        replies: [],
      },
    ],
    heart: {
      id: 'e',
      liked: 5,
      dislike: 1,
    },
  },
  {
    id: 'f',
    userName: 'kook',
    image: {
      id: 'g',
      originFileName: 'helping-hand.png',
      fileName: 'image62117144.helping-hand.png',
      filePath: 'images\\2023\\8\\14',
    },
    content: '',
    comments: [],
    heart: {
      id: 'h',
      liked: 0,
      dislike: 0,
    },
  },
  {
    id: 'i',
    userName: 'apple',
    image: {
      id: 'p',
      originFileName: 'helping-hand.png',
      fileName: 'image71424132.helping-hand.png',
      filePath: 'images\\2023\\8\\16',
    },
    content: 'test',
    comments: [],
    heart: {
      id: 'q',
      liked: 3,
      dislike: 1,
    },
  },
];

export const handlers = [
  // peeds API
  // peeds 전체 조회
  rest.get('/peeds', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(peeds));
  }),

  // peed 생성
  rest.post('/peeds/peed', (req, res, ctx) => {
    const { userName, content, image } = req.body;

    const newPeed = {
      id: uuidv4(),
      userName: userName,
      image: {
        id: uuidv4(),
        originFileName: 'helping-hand.png',
        fileName: 'image144254176.helping-hand.png',
        filePath: 'images\\2023\\8\\14',
      },
      content: content,
      comments: [],
      heart: {
        id: uuidv4(),
        liked: 0,
        dislike: 0,
      },
    };

    peeds.unshift(newPeed);

    return res(ctx.status(201), ctx.json(newPeed));
  }),

  // peed에 댓글 달기
  rest.post('/comments/comment/:peedId', (req, res, ctx) => {
    const { peedId } = req.params;
    const { userName, content } = req.body;

    console.log(peedId, userName, content);
    const newComment = {
      id: uuidv4(),
      userName: userName,
      content: content,
      replies: [],
    };

    const peed = peeds.find((peed) => String(peed.id) === peedId);
    peed.comments.push(newComment);

    return res(ctx.status(201), ctx.json(newComment));
  }),

  // 댓글 삭제
  rest.delete('/comments/comment/:commentId', (req, res, ctx) => {
    const { commentId } = req.params;

    const peed = peeds.find((peed) =>
      peed.comments.find((comment) => String(comment.id) === commentId)
    );

    if (peed) {
      const comment = peed.comments.find(
        (comment) => String(comment.id) === commentId
      );
      const index = peed.comments.indexOf(comment);
      peed.comments.splice(index, 1);

      return res(ctx.status(200), ctx.json(comment));
    } else {
      //대댓글 삭제
      const peed = peeds.find((peed) =>
        peed.comments.find((comment) =>
          comment.replies.find((reply) => String(reply.id) === commentId)
        )
      );
      const comment = peed.comments.find((comment) =>
        comment.replies.find((reply) => String(reply.id) === commentId)
      );
      const reply = comment.replies.find(
        (reply) => String(reply.id) === commentId
      );
      const index = comment.replies.indexOf(reply);
      comment.replies.splice(index, 1);

      return res(ctx.status(200), ctx.json(reply));
    }
  }),

  // 대댓글 생성
  rest.post('/replies/:commentId', (req, res, ctx) => {
    const { commentId } = req.params;
    const { userName, content } = req.body;

    const newReply = {
      id: uuidv4(),
      userName: userName,
      content: content,
    };

    const peed = peeds.find((peed) =>
      peed.comments.find((comment) => String(comment.id) === commentId)
    );
    const comment = peed.comments.find(
      (comment) => String(comment.id) === commentId
    );
    comment.replies.push(newReply);

    return res(ctx.status(201), ctx.json(newReply));
  }),
];
