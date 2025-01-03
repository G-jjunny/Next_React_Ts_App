import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { toast } from "react-toastify";

interface UseFavorite {
  productId: string;
  currentUser?: User | null;
}

const useFavorite = ({ productId, currentUser }: UseFavorite) => {
  const router = useRouter();
  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(productId);
  }, [currentUser, productId]);

  const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    // currentUser가 아닌 경우 로그인 페이지로 이동
    if (!currentUser) {
      toast.warn("먼저 로그인을 해주세요.");
      return router.push("/login");
    }
    try {
      let request;
      if (hasFavorite) {
        request = () => axios.delete(`/api/favorites/${productId}`);
      } else {
        request = () => axios.post(`/api/favorites/${productId}`);
      }
      await request(); // 처리가 완료될때까지
      router.refresh(); // 완료후 refresh
      toast.success("성공했습니다.");
    } catch (error) {
      console.log(error);
      toast.error("실패했습니다.");
    }
  };

  return { hasFavorite, toggleFavorite };
};

export default useFavorite;
