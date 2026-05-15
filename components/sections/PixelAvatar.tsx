export default function PixelAvatar() {
  return (
    <svg
      width="160"
      height="200"
      viewBox="0 0 80 100"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      style={{ imageRendering: "pixelated" }}
    >

      {/** 머리: 단발 */}
      {/* 머리카락 - 상단 베이스 */}
      <rect x="12" y="8"  width="56" height="12" fill="#7B4F2E"/>
      {/* 머리카락 - 하이라이트 (윤기) */}
      <rect x="22" y="10" width="36" height="3"  fill="#A0643A"/>
      {/* 머리카락 - 양옆 밥컷 */}
      <rect x="12" y="20" width="8"  height="26" fill="#7B4F2E"/>
      <rect x="8" y="36" width="8"  height="10" fill="#7B4F2E"/>
      <rect x="60" y="20" width="8"  height="26" fill="#7B4F2E"/>
      <rect x="65" y="36" width="8"  height="10" fill="#7B4F2E"/>
      {/* 밥컷 안쪽 그림자 (얼굴과 경계 입체감) */}
      <rect x="18" y="20" width="2"  height="20" fill="#5C3520"/>
      <rect x="60" y="20" width="2"  height="20" fill="#5C3520"/>

      {/* 얼굴 */}
      <rect x="20" y="20" width="40" height="20" fill="#FFCBA4"/>

      {/* 눈썹 */}
      <rect x="27" y="23" width="6"  height="2"  fill="#5C3A1E"/>
      <rect x="47" y="23" width="6"  height="2"  fill="#5C3A1E"/>

      {/* 눈 - 동글동글하게 + 반짝이 하이라이트 */}
      <rect x="26" y="27" width="7"  height="5"  fill="#1a1a1a"/>
      <rect x="27" y="28" width="2"  height="2"  fill="#ffffff"/>
      <rect x="47" y="27" width="7"  height="5"  fill="#1a1a1a"/>
      <rect x="48" y="28" width="2"  height="2"  fill="#ffffff"/>

      {/* 볼터치 */}
      <rect x="21" y="34" width="6"  height="4"  fill="#FFB3C1"/>
      <rect x="53" y="34" width="6"  height="4"  fill="#FFB3C1"/>

      {/* 입 - U자 미소 */}
      <rect x="31" y="34" width="2"  height="3"  fill="#E53935"/>
      <rect x="33" y="36" width="14" height="2"  fill="#E53935"/>
      <rect x="47" y="34" width="2"  height="3"  fill="#E53935"/>

      {/* 목 */}
      <rect x="28" y="40" width="24" height="8"  fill="#FFCBA4"/>

      {/* 셔츠 */}
      <rect x="16" y="48" width="48" height="20" fill="#FF85B3"/>
      <rect x="8"  y="48" width="8"  height="16" fill="#FF85B3"/>
      <rect x="64" y="48" width="8"  height="16" fill="#FF85B3"/>

      {/* 손 */}
      <rect x="8"  y="64" width="8"  height="8"  fill="#FFCBA4"/>
      <rect x="64" y="64" width="8"  height="8"  fill="#FFCBA4"/>

      {/* 바지 */}
      <rect x="16" y="68" width="48" height="20" fill="#4B4B8F"/>

      {/* 신발 */}
      <rect x="12" y="88" width="28" height="8"  fill="#2d2d5e"/>
      <rect x="40" y="88" width="28" height="8"  fill="#2d2d5e"/>
    </svg>
  );
}
