"use server";
import createSupabaseServerClient from "@/server/supabase.js";

export async function addIdol(idol) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("idol").insert([idol]).select();
  if (error) {
    return { status: "Error!", data: error };
  } else return { status: "Success!", data: data };
}

export async function getIdol() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("idol").select("*");
  if (error) {
    return { status: "Error!", data: error };
  } else return { status: "Success!", data: data };
}

export async function getLogs(id) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("log").select("*").eq("idol", id);
  if (error) {
    return { status: "Error!", data: error };
  } else return { status: "Success!", data: data };
}

export async function addLog(log) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("log").insert([log]).select();
  if (error) {
    return { status: "Error!", data: error };
  } else return { status: "Success!", data: data };
}