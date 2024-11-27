import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMemberInformation } from "../Services/data.service";
import type { MemberInformation } from "../Types";

export const useMemberInfo = () => {
  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useState<MemberInformation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMemberInfo = async () => {
      try {
        const storedMemberInfo = sessionStorage.getItem("memberInfo");
        if (!storedMemberInfo) {
          navigate("/sign-in");
          return;
        }

        const { idNumber, policyNumber } = JSON.parse(storedMemberInfo);
        const info = await getMemberInformation(idNumber, policyNumber);
        setMemberInfo(info);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchMemberInfo();
  }, [navigate]);

  return { memberInfo, loading, error };
};
