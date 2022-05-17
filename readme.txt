<ClassDiagram>
-Player-
HP: 플레이어의 HP
p.x/p.y: 플레이어의 위치

-Bullet-
atk: 충돌
maxBullet: 최대 총알 갯수
b.x/b.y: 총알의 좌표
speed: 총알의 속도

-Enemy-
HP: 적의 HP
atk: 충돌
e.x/e.y: Enemy의 좌표

-Game Manager-
Player, Enemy, Bullet 을 관리
score: 점수 표시
------------------------------------------------------------------------------------------------
Shot(): 총알 발사, 2발만 화면에 보이도록 함
GameState(): GameStart, GameOver(플레이어 HP가 0이 되었을 때)
scoreCount(): Player가 Bullet을 이용해 Enemy를 제거할 경우 스코어가 올라감
Destroy(): 캔버스 밖으로 총알이 나갔을 때,적이 총알에 맞았을 때 총알을 없애줌
Respawn(): 일정 시간이 되면 적이 생성되도록 함
e_move(): Enemy가 Player를 향해 움직이도록 함


<FlowChart>
[게임 시작]
     ↓
플레이어가 총알을 발사 → 적이 플레이어에게 닿을 시 -(YES) → 플레이어의 HP 감소 
							 ↓
		      			              플레이어의 HP가 0이 되면
							 ↓
		     			           	        [게임 오버]
		      → 적을 죽였다면 -(YES) → 점수 추가
				   -(NO) → 점수 추가 안함