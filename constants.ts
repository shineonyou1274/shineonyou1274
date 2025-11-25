import { Scenario, ResultLevel } from './types';

export const getPokemonImage = (id: number) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

export const GAME_DATA: Scenario[] = [
  {
    id: 1,
    title: "게임 중 트롤 발생!",
    situation: "중요한 랭크 게임 중인데 팀원이 실수를 연발한다! 당신의 선택은?",
    bg: "bg-slate-800",
    options: [
      {
        type: "bad",
        character: "팬텀",
        spriteId: 94, 
        label: "공격적인 태도",
        text: "야 이 벌레야! 게임 접어라 ㅉㅉ (차단)",
        moveName: "섀도우볼 (비난하기)",
        feedbackCharacter: "로켓단",
        feedback: "상처받은 팀원이 게임을 던졌습니다! 패배...",
        score: 0
      },
      {
        type: "good",
        character: "루카리오",
        spriteId: 448, 
        label: "수용적인 태도",
        text: "괜찮아! 멘탈 잡고 다시 해보자. 할 수 있어!",
        moveName: "파동탄 (격려하기)",
        feedbackCharacter: "지우",
        feedback: "효과는 굉장했다! 팀원이 감동하여 역전에 성공했다!",
        score: 10
      }
    ]
  },
  {
    id: 2,
    title: "친구의 난해한 패션",
    situation: "친구가 새로 산 옷을 입고 왔는데... 솔직히 너무 이상하다.",
    bg: "bg-pink-900",
    options: [
      {
        type: "bad",
        character: "나옹",
        spriteId: 52, 
        label: "솔직한 반응",
        text: "키득키득~ 야 너 패션 테러리스트냐? 돈 버렸네~",
        moveName: "마구할퀴기 (비웃기)",
        feedbackCharacter: "나옹",
        feedback: "친구의 자존심에 치명타! 친구가 울면서 집에 갔다...",
        score: 0
      },
      {
        type: "good",
        character: "님피아",
        spriteId: 700, 
        label: "긍정적 반응",
        text: "오~ 완전 유니크한데? 너만의 스타일이 있어!",
        moveName: "문포스 (칭찬하기)",
        feedbackCharacter: "이슬",
        feedback: "친구의 기분이 좋아졌다! 우정 레벨 상승!",
        score: 10
      }
    ]
  },
  {
    id: 3,
    title: "조별 과제 잠수부",
    situation: "조별 과제 마감일인데 연락 두절된 조원에게 연락을 취한다.",
    bg: "bg-green-900",
    options: [
      {
        type: "bad",
        character: "또도가스",
        spriteId: 110, 
        label: "강경 대응",
        text: "님 제정신? 이름 뺍니다 ㅅㄱ. 학교 오지 마셈.",
        moveName: "오물폭탄 (협박하기)",
        feedbackCharacter: "로이",
        feedback: "싸움이 나서 조별 과제 폭망! 교수님 호출 발생...",
        score: 0
      },
      {
        type: "good",
        character: "이상해씨",
        spriteId: 1, 
        label: "유연한 대응",
        text: "무슨 일 있어? 걱정되네. 오늘까지는 꼭 부탁해!",
        moveName: "덩굴채찍 (손 내밀기)",
        feedbackCharacter: "웅",
        feedback: "조원이 미안해하며 자료를 보냈다! 과제 제출 성공!",
        score: 10
      }
    ]
  },
  {
    id: 4,
    title: "뒷담화의 유혹",
    situation: "친구가 없는 자리에서 다른 친구들이 그 친구 욕을 시작했다.",
    bg: "bg-purple-900",
    options: [
      {
        type: "bad",
        character: "세비퍼",
        spriteId: 336, 
        label: "맞장구",
        text: "인정 ㅋㅋ 걔 좀 이상하긴 해. 저번에도 그러더라.",
        moveName: "독꼬리 (동조하기)",
        feedbackCharacter: "로사",
        feedback: "자신도 모르게 가해자가 되었다! 나중에 소문나서 곤란해짐...",
        score: 0
      },
      {
        type: "good",
        character: "망나뇽",
        spriteId: 149, 
        label: "중재",
        text: "음, 없는 자리에서 얘기하는 건 좀 아닌 것 같아. 나중에 직접 물어보자.",
        moveName: "신속 (화제 돌리기)",
        feedbackCharacter: "목호",
        feedback: "분위기를 지켜냈다! 친구들 사이에서 신뢰도가 상승했다!",
        score: 10
      }
    ]
  },
  {
    id: 5,
    title: "동생이 내 물건을 망가뜨림",
    situation: "아끼는 피규어를 동생이 만지다가 부러뜨렸다!",
    bg: "bg-red-900",
    options: [
      {
        type: "bad",
        character: "갸라도스",
        spriteId: 130, 
        label: "즉각 응징",
        text: "야!!! 너 진짜 죽을래? 당장 나가!!! 꼴도 보기 싫어!",
        moveName: "파괴광선 (고함치기)",
        feedbackCharacter: "비주기",
        feedback: "동생이 공포에 질려 울음을 터뜨렸다. 집안 분위기 빙하기...",
        score: 0
      },
      {
        type: "good",
        character: "럭키",
        spriteId: 113, 
        label: "대화 시도",
        text: "하... 속상하네. 다음부터는 꼭 물어보고 만져줘.",
        moveName: "알낳기 (참기)",
        feedbackCharacter: "간호순",
        feedback: "동생이 진심으로 사과했다. 망가진 건 고치면 되지!",
        score: 10
      }
    ]
  },
  {
    id: 6,
    title: "빌린 돈 안 갚는 친구",
    situation: "친구가 빌려간 돈을 계속 안 갚고 모른 척한다.",
    bg: "bg-yellow-900",
    options: [
      {
        type: "bad",
        character: "성원숭",
        spriteId: 57, 
        label: "강력 경고",
        text: "내 돈 내놔! 안 주면 신고한다? 거지냐?",
        moveName: "역린 (화내기)",
        feedbackCharacter: "태권왕",
        feedback: "돈은 받았지만 친구를 잃었다. 씁쓸한 승리...",
        score: 0
      },
      {
        type: "good",
        character: "피카츄",
        spriteId: 25, 
        label: "부드러운 상기",
        text: "혹시 깜빡했어? 저번에 빌려준 거 오늘 줄 수 있을까?",
        moveName: "10만볼트 (찌릿하게 상기)",
        feedbackCharacter: "지우",
        feedback: "친구가 '앗 맞다!' 하며 바로 갚았다. 깔끔한 해결!",
        score: 10
      }
    ]
  },
  {
    id: 7,
    title: "급식실 새치기 사건",
    situation: "맛있는 반찬이 나왔는데 친구가 슬쩍 내 앞으로 새치기를 한다.",
    bg: "bg-orange-800",
    options: [
      {
        type: "bad",
        character: "깨비드릴조",
        spriteId: 22, 
        label: "비난",
        text: "야! 눈 없냐? 뒤로 가라 ㅡㅡ 개념 밥 말아먹음?",
        moveName: "회전부리 (쪼아대기)",
        feedbackCharacter: "로켓단",
        feedback: "급식실에서 큰 소리로 싸움이 났다. 선생님께 둘 다 혼남...",
        score: 0
      },
      {
        type: "good",
        character: "잠만보",
        spriteId: 143, 
        label: "정중한 요청",
        text: "어? 나 줄 서있는 건데... 뒤로 가서 서줄래?",
        moveName: "하품 (침착하게 말하기)",
        feedbackCharacter: "지우",
        feedback: "친구가 민망해하며 뒤로 갔다. 평화롭게 급식 획득!",
        score: 10
      }
    ]
  },
  {
    id: 8,
    title: "복도 충돌 사고",
    situation: "복도에서 뛰어오던 친구와 부딪혔다! 내 잘못은 아니지만...",
    bg: "bg-stone-700",
    options: [
      {
        type: "bad",
        character: "꼬마돌",
        spriteId: 74, 
        label: "적반하장",
        text: "아 눈 폼으로 달고 다니냐? 사과 안 해? 진짜 짜증나네.",
        moveName: "돌떨구기 (탓하기)",
        feedbackCharacter: "웅",
        feedback: "서로 기분만 상하고 하루 종일 찜찜했다.",
        score: 0
      },
      {
        type: "good",
        character: "푸린",
        spriteId: 39, 
        label: "걱정",
        text: "앗 깜짝이야! 너 안 다쳤어? 조심 좀 하지~",
        moveName: "노래하기 (걱정해주기)",
        feedbackCharacter: "이슬",
        feedback: "친구가 정말 미안해하며 사과했다. 훈훈한 마무리!",
        score: 10
      }
    ]
  },
  {
    id: 9,
    title: "단톡방 도배 테러",
    situation: "친구가 단톡방에 의미 없는 이모티콘을 100개씩 보내서 알림이 계속 울린다.",
    bg: "bg-violet-900",
    options: [
      {
        type: "bad",
        character: "질퍽이",
        spriteId: 88, 
        label: "공격",
        text: "작작 좀 해라 ㅡㅡ 알림 울린다고. 강퇴한다?",
        moveName: "오물공격 (면박주기)",
        feedbackCharacter: "로이",
        feedback: "친구가 삐져서 단톡방을 나갔다. 분위기 싸해짐...",
        score: 0
      },
      {
        type: "good",
        character: "수륙챙이",
        spriteId: 61, 
        label: "설득",
        text: "오~ 이모티콘 귀엽네 ㅋㅋ 근데 알림 너무 울려서 조금만 천천히!",
        moveName: "물대포 (분위기 환기)",
        feedbackCharacter: "이슬",
        feedback: "친구가 '앗 미안 ㅋㅋ' 하고 멈췄다. 평화 유지 성공!",
        score: 10
      }
    ]
  },
  {
    id: 10,
    title: "체육시간 공 독점",
    situation: "피구 경기 중, 친구 혼자서만 공을 가지고 패스를 안 한다.",
    bg: "bg-red-800",
    options: [
      {
        type: "bad",
        character: "망키",
        spriteId: 56, 
        label: "비난",
        text: "야! 니가 메시냐? 혼자 다 하네. 공 좀 돌리라고!",
        moveName: "안다리걸기 (화내기)",
        feedbackCharacter: "지우",
        feedback: "팀워크가 무너져서 결국 경기에서 졌다...",
        score: 0
      },
      {
        type: "good",
        character: "파이리",
        spriteId: 4, 
        label: "제안",
        text: "OO아! 나 여기 비었어! 패스하면 우리가 이길 수 있어!",
        moveName: "불꽃세례 (열정적으로 부르기)",
        feedbackCharacter: "지우",
        feedback: "친구가 패스해서 득점 성공! 우리 팀 승리!",
        score: 10
      }
    ]
  }
];

export const RESULTS: ResultLevel[] = [
  {
    min: 0,
    max: 20,
    level: "Lv.5 꼬렛 등급",
    title: "말실수 투성이 '초보 트레이너'",
    pokemonId: 19,
    desc: "아직 언어 사용이 서투르군요! 당신의 거친 말은 상대방에게 '몸통박치기'처럼 아플 수 있어요.",
    color: "bg-gray-600"
  },
  {
    min: 30,
    max: 50,
    level: "Lv.25 고라파덕 등급",
    title: "헷갈리는 '성장기 트레이너'",
    pokemonId: 54,
    desc: "나쁜 말인 줄 모르고 쓸 때가 있군요? '어라? 방금 그 말 실수였나?' 하고 머리를 긁적일 때가 많아요.",
    color: "bg-yellow-500"
  },
  {
    min: 60,
    max: 70,
    level: "Lv.45 리자드 등급",
    title: "가끔 불을 뿜는 '열혈 트레이너'",
    pokemonId: 5,
    desc: "나쁘진 않지만, 화가 나면 감정 조절에 실패하여 '화염방사'를 뿜는군요. 불조심하세요!",
    color: "bg-orange-600"
  },
  {
    min: 80,
    max: 90,
    level: "Lv.80 님피아 등급",
    title: "사랑스러운 '공감 요정'",
    pokemonId: 700,
    desc: "훌륭해요! 당신의 다정한 말은 페어리 타입 기술처럼 친구들의 마음을 사르르 녹여줍니다.",
    color: "bg-pink-500"
  },
  {
    min: 100,
    max: 100,
    level: "Lv.100 뮤츠 등급",
    title: "언어의 마스터 '전설의 트레이너'",
    pokemonId: 150,
    desc: "완벽합니다! 당신의 언어 습관은 전설의 포켓몬처럼 강력하고 품위가 있습니다. 진정한 챔피언!",
    color: "bg-purple-600"
  }
];
