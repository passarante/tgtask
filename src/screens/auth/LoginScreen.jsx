import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "./../../constants/index";
import logoImg from "../../assets/images/logo.png";
import { EyeSlash, Google, Lock1, UserTag } from "iconsax-react-native";
import FormInput from "../../components/auth/FormInput";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    // Container
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>
      {/* Form */}
      <View>
        {/* Form Header */}
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        {/* Form Inputs */}
        <View>
          {/* Form Input Email */}

          <FormInput
            label="Email Adresiniz"
            placeholder="test@gmail.com"
            leftIcon={
              <UserTag color={COLORS.white} size={24} style={styles.leftIcon} />
            }
          />

          {/* Form Input Password */}
          <FormInput
            label="Şifreniz"
            placeholder="......."
            leftIcon={
              <Lock1 color={COLORS.white} size={24} style={styles.leftIcon} />
            }
            rightIcon={
              <EyeSlash
                color={COLORS.white}
                size={24}
                style={styles.rightIcon}
              />
            }
          />

          <Text style={styles.forgotText}>Forgot Password?</Text>
          {/* Form Buttons  */}
          <View>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.continueWithBlock}>
            <View style={styles.divider} />
            <Text style={styles.continueText}>Or continue with</Text>
            <View style={styles.divider} />
          </View>
          <View>
            <TouchableOpacity style={styles.googleBtn}>
              <Google size={24} color={COLORS.white} />
              <Text style={styles.googleText}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.registerText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.registerLinkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    paddingHorizontal: 26,
    backgroundColor: COLORS.primary,
  },
  header: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    marginTop: 40,
    fontSize: 26,
    fontFamily: "Inter_600SemiBold",
    color: COLORS.white,
    marginBottom: 22,
  },

  leftIcon: {
    position: "absolute",
    zIndex: 10,
    top: 17,
    left: 18,
  },

  rightIcon: {
    position: "absolute",
    zIndex: 10,
    top: 17,
    right: 18,
  },
  forgotText: {
    color: COLORS.text,
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    marginTop: -15,
    alignSelf: "flex-end",
    marginBottom: 30,
  },
  loginBtn: {
    backgroundColor: COLORS.btnPrimary,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  loginBtnText: {
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
  },
  continueWithBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  divider: {
    height: 1,
    width: 110,
    backgroundColor: COLORS.text,
  },
  continueText: {
    color: COLORS.text,
    fontSize: 16,
    fontFamily: "Inter_500Medium",
  },
  googleBtn: {
    height: 60,
    borderColor: COLORS.white,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginBottom: 25,
  },
  googleText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: "Inter_500Medium",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    color: COLORS.text,
  },
  registerLinkText: {
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    color: COLORS.btnPrimary,
  },
});
export default LoginScreen;
