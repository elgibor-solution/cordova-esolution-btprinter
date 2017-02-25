package com.esolution.btprinter;

import android.content.Context;

public class BTUtil {
  public static int getResource(Context context, String resourceName, String resourceType) {
    return context.getResources().getIdentifier(resourceName, resourceType, context.getPackageName());
  }

  public static int getStringResource(Context context, String resourceName) {
    return BTUtil.getResource(context, resourceName, "string");
  }

  public static String getStringFromStringResource(Context context, String resourceName) {
    return context.getString(BTUtil.getStringResource(context, resourceName));
  }
}
